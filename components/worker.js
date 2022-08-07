const { Configuration, OpenAIApi } = require("openai");


export const worker = async (question) =>  {


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: question,
  temperature: 0,
  max_tokens: 450,
  top_p: 1,
  frequency_penalty: 0.2,
  presence_penalty: 0,
});
let result = "";
completion.data.choices.forEach(elements => result+=elements.text);
console.log(result);

return(
    result
)
// completion.data.choices.forEach(elements => console.log(elements.text));
}
