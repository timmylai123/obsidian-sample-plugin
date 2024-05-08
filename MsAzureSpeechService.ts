import * as sdk from "microsoft-cognitiveservices-speech-sdk"
export const MS_region_code = 'eastus'
export const MS_voice_id_code = "en-US-AvaMultilingualNeural"
export const MS_key = "cd28c093ed91470abc18f988d6bc6763"
export const TEST=true
interface MsCredentials{
    AccessKey: string,
    region: string
}

export class MsAzureSpeechService{
    private audio: HTMLAudioElement;
    private synthesizer: sdk.SpeechSynthesizer
    private audioData:ArrayBuffer
    private configuration:{
        audioConfig: sdk.AudioConfig
        speechConfig: sdk.SpeechConfig
        textCache: string,
    }


constructor(){
        this.configuration={
            audioConfig: sdk.AudioConfig.fromDefaultSpeakerOutput(),
            speechConfig: sdk.SpeechConfig.fromSubscription(MS_key,MS_region_code),
            textCache: "No document selectes",
        }
        this.configuration.speechConfig.speechSynthesisVoiceName=MS_voice_id_code
        this.configuration.speechConfig.speechSynthesisLanguage="en-US"
        this.audio = new Audio()
        this.audio.src = ''
        
    }
    voiceGet(Text: string) {
        this.synthesizer = new sdk.SpeechSynthesizer(this.configuration.speechConfig,this.configuration.audioConfig)
        var errorReason = null;
        this.synthesizer.speakTextAsync(Text,(result)=>{
            this.audioData=result.audioData
            errorReason = result.errorDetails
    },()=>{return "no"})
    }

    getAudio(){
        return this.audioData
    }

    
}