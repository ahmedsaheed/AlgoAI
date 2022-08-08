const { Configuration, OpenAIApi } = require("openai");
import Loader from "./spinner"



export default async function worker(question){
  let result = "";
  let isMounted = false;
const configuration = new Configuration({

  apiKey: process.env.OPENAI,
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
// let result = "";
//     completion.data.choices.forEach(elements => result+=elements.text);
//     console.log(result);
if (completion.data.choices.length !== 0) {
    completion.data.choices.forEach(elements => result+=elements.text);
    console.log(result);
    isMounted = true;
}


return(
    isMounted ? result : null
)
}


  