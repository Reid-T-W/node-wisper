const OpenAI = require("openai")
require('dotenv').config()

const fs= require("fs")
const openai = new OpenAI({
    apiKey:process.env.OPENAI_KEY
})

const audioFun = async()=>{
    const transcription=await openai.audio.transcriptions.create({
        file:fs.createReadStream("Testing.mp3"),
        model:"whisper-1",
    })

    console.log(transcription)
}

audioFun();