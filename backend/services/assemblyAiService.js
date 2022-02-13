//require('dotenv').config();
import fs from 'fs'
import axios from 'axios'
import { SpeechRecorder } from 'speech-recorder'
import pkg from 'wavefile';
const { WaveFile } = pkg;

let file = './audio/destination.wav'
let buffer = [];
const sampleRate = 16000;
const recorder = new SpeechRecorder({
    onAudio: ({ audio }) => {
        for (let i = 0; i < audio.length; i++) {
            buffer.push(audio[i]);
        }

        if (buffer.length >= sampleRate * 5) {
            saveFile(file, buffer)
            getRecorder()
        }
    },
});

async function getSTT(file = "./audio/destination.wav") {
    const request = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: "6b5ef4b0d9e645368a5d781f8ef6d7c8",
            "content-type": "application/json",
            "transfer-encoding": "chunked",
        },
    });
    console.log('_____________________Processing_____________________')
    fs.readFile(file, (err, data) => {
        if (err) return console.error(err);
        request
            .post("/upload", data)
            .then((res) => request
                .post("/transcript", {
                    audio_url: res.data.upload_url
                })
                .then((res) => getTranscript(res.data.id, request)
                    .then((res) => doSomething(res))
                    .catch((err) => console.error(err))
                )
                .catch((err) => console.error(err)));
    });
}

function doSomething(stt) {
    // TODO
    console.log(stt)
    let res
    for (let i = 0; i < stt.length; i++) {
        console.log(stt[i].text)
        sanitize(stt[i].text)
    }
}

function sanitize(dirty) {
    let lower = dirty.toLowerCase()
    let char1 = lower.charAt(0)
    let char2 = lower.substr(1, 2).match(/[a-zA-Z]/) ? lower.charAt(1) : ''
    return char1 + char2
}

async function getTranscript(id, request) {
    await sleep(10000)
    return request
        .get(`/transcript/${id}`)
        .then((res) => res.data.words)
        .catch((err) => console.error(err))
        .finally((res) => console.log('Done transcripting'))
}

async function getDestinationSTT() {
    try {
        recordAudio()
    } catch (err) {
        console.error(err)
    }
}

function recordAudio(ms = 100) {
    console.log("Ready...");
    setTimeout(() => {
        console.log("Go!")
        recorder.start();
    }, ms);
}

function getRecorder() {
    recorder.stop()
    getSTT()
}

function saveFile(file, buffer) {
    let wav = new WaveFile();
    wav.fromScratch(1, sampleRate, "16", buffer);
    console.log(wav.toBuffer())
    fs.writeFileSync(file, wav.toBuffer());
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default {
    getDestinationSTT
};
