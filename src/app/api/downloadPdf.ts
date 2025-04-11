import puppeteer from 'puppeteer';
import { NextApiRequest, NextApiResponse } from 'next';
import { getMessagesFromDB } from '@/lib/db'; // Your DB fetching logic

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const messages = await getMessagesFromDB(); // Auto-fetch from DB

  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          pre { background: #f5f5f5; padding: 10px; border-radius: 5px; overflow-x: auto; }
          code { font-family: monospace; }
        </style>
      </head>
      <body>
        ${messages.map(msg => `
          <div style="margin-bottom: 16px;">
            <div>${msg.role.toUpperCase()}</div>
            <div>${msg.content}</div>
          </div>
        `).join('')}
      </body>
    </html>
  `;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  const pdfBuffer = await page.pdf({ format: 'A4' });
  await browser.close();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=chat.pdf');
  res.send(pdfBuffer);
}
