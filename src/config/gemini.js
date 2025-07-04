// const apikey = "AIzaSyAno0sIFfNWJhoVU17lCWe4oWlu_NcWFQs"

import{
    GoogleGenerativeAI,
    // HarmCategory,
    // HarmBlockThreshold,
  } from "@google/generative-ai";
//   const fs = require("node:fs");
//   const mime = require("mime-types");
  
  const apiKey = "AIzaSyAno0sIFfNWJhoVU17lCWe4oWlu_NcWFQs"     //process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro-exp-03-25",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 1,
    topK: 1,
    maxOutputTokens: 2048,
    // responseModalities: [
    // ],
    // responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    // TODO: Following code needs to be updated for client-side apps.
    // const candidates = result.response.candidates;
    // for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
    //   for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
    //     const part = candidates[candidate_index].content.parts[part_index];
    //     if(part.inlineData) {
    //       try {
    //         const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
    //         fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
    //         console.log(`Output written to: ${filename}`);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }
    
    console.log(result.response.text());
    return response.text();
  }
  
  export default run;