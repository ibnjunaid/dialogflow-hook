
import express from 'express';

import  {conversation}  from'@assistant/conversation';

const app = conversation({
  debug : true
});

app.handle('start_scene_initial_prompt', (conv) => {
  console.log('Start scene: initial prompt');
  conv.overwrite = false;
  conv.scene.next = { name: 'actions.scene.END_CONVERSATION' };
  conv.add('Hello world from fulfillment');
});

const expApp = express();
expApp.use(express.json(),app);
expApp.listen(process.env.PORT || 6000,()=>{
  console.log('App listening');
});