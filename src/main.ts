import express from 'express';
import {
  dialogflow,
  Image
} from 'actions-on-google'

const app = dialogflow({
  debug : true
});

app.intent('Default Welcome Intent', conv => {
  conv.ask('Hi, how is it going?')
  conv.ask(`Here's a picture of a cat`)
  conv.ask(new Image({
    url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
    alt: 'A cat',
  }))
})

app.catch((conv) =>{
  conv.close('Theres some glitch');
})

const expApp = express();
expApp.use(express.json(),app);
expApp.listen(process.env.PORT || 6000,()=>{
  console.log('App listening');
});