import query from "@/src/lib/queryApi";
import { NextRequest, NextResponse } from "next/server";
import admin from "firebase-admin";
import { Message } from "@/type";
import { adminDB } from "@/firabaseAdmin";


export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();

  const { prompt, id, model, session ,mode} = await reqBody;

  console.log("askchat route", prompt, id, model, session);

  try {
    if (!prompt) {
      return NextResponse.json(
        {
          message: "Please provide a propmt!",
        },
        { status: 400 }
      );
    }

    if (!id) {
      return NextResponse.json(
        {
          message: "Please provide a valid chat ID!",
        },
        { status: 400 }
      );
    }

    const response = await query(prompt, id ,model, mode);
    console.log("response", response);

    const message: Message = {
      text: response || "Youlearn was unable to find an answer for that!",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "Assistant",
        name: "Assistant",
        avatar:
          "https://res.cloudinary.com/drnmwucy2/image/upload/b_rgb:FFFFFF/c_pad,w_500,h_500,ar_1:1/v1746214127/d9e5tju-af9e4eff-5882-4ac0-abb0-936524aefd57_cxwite.png",
      },
    };

    console.log("adding message")

    await adminDB
      .collection("users")
      .doc(session)
      .collection("chats")
      .doc(id)
      .collection("messages")
      .add(message);

    console.log("added message")

    return NextResponse.json(
      {
        answer: message?.text,
        message: "Youlearn has responded!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
