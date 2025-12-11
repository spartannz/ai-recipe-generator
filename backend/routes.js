import "./config/env.js";
import express from "express";
import OpenAI from "openai";

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


router.post("/recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;

    const prompt = `
      Create a recipe using: ${ingredients}.
      Return ONLY JSON exactly like this:
      {   
        "title": "",
        "summary": "",
        "ingredients": [],
        "steps": []
      }
    `;

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt
    });

    const raw = response.output_text;
    console.log("RECIPE RAW:", raw);

    if (!raw) throw new Error("GPT returned empty output_text");


    const cleaned = raw
      .replace(/```(\w+)?/g, "")  
      .replace(/```/g, "")       
      .trim();

    const recipe = JSON.parse(cleaned);
    res.json(recipe);

  } catch (error) {
    console.log("RECIPE ERROR:", error);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});


router.post("/similar", async (req, res) => {
  try {
    const { title } = req.body;

    const prompt = `
      Generate 3 recipes similar to ${title}.
      Return ONLY JSON array exactly like this:
      [
        { "title": "", "summary": "", "ingredients": [], "steps": [] },
        { "title": "", "summary": "", "ingredients": [], "steps": [] },
        { "title": "", "summary": "", "ingredients": [], "steps": [] }
      ]
    `;

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt
    });

    const raw = response.output_text;
    console.log("SIMILAR RAW:", raw);

    if (!raw) throw new Error("GPT returned empty output_text");

    const cleaned = raw
      .replace(/```(\w+)?/g, "")   
      .replace(/```/g, "")      
      .trim();

    const similar = JSON.parse(cleaned);
    res.json(similar);

  } catch (error) {
    console.log("SIMILAR ERROR:", error);
    res.status(500).json({ error: "Failed to generate similar recipes" });
  }
});

export default router;