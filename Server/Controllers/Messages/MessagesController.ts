import * as services from './../../Services';

export async function GetMessages(req, res){
    const result = await services.MessagesService.GetMessages();
    res.json(result);
}

export async function AddMessage(req, res){
    const result = await services.MessagesService.AddMessage(req.body);
    res.json(result);
}