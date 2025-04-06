import { console } from "inspector";

const query = async (input: string, id: string, model: string, mode: string) => {
  try {
    const endpoint =
      mode === "link"
        ? "http://localhost:8000/summarize"
        : "http://localhost:8000/chat";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_query: input,
        session: id,
        model: model,
        mode : mode, 
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("API response:", data);
    console.log("Querying API with input:", input, id, model, mode);
    return mode === "link" ? data.summary : data.answer || "No response received.";
  } catch (error: any) {
    return `Error fetching response: ${error.message}`;
  }
};

export default query;
