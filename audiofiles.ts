import * as info from "MsAzureSpeechService"
import * as sdk from"microsoft-cognitiveservices-speech-sdk"
import { PathLike } from "fs"
export function createAudio(Text: string){
const PathLike="audio.mp3"
const speechConfig = sdk.SpeechConfig.fromSubscription(info.MS_key,info.MS_region_code)
const audioConfig = sdk.AudioConfig.fromAudioFileOutput(PathLike)
speechConfig.speechSynthesisVoiceName=info.MS_voice_id_code
speechConfig.speechSynthesisLanguage="en-US"
speechConfig.speechSynthesisOutputFormat=sdk.SpeechSynthesisOutputFormat.Audio16Khz128KBitRateMonoMp3
var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
synthesizer.speakTextAsync(Text,
  (result)=>{
    if(result.reason==sdk.ResultReason.SynthesizingAudioCompleted){
      console.log("synthesis finished.");
    }else{
      console.error("Speech sytnthesis canceled,"+result.errorDetails+
        "\nDid you set the speech resource key and region values?");

      
    }
    synthesizer.close()
    },
    function(err){
      console.trace("err - "+err);
      synthesizer.close();
    })
  }

