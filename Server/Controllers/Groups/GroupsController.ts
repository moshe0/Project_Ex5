import * as services from './../../Services';


export async function GetGroups(req, res){
    const result = await services.GroupsService.GetGroups();
    res.json(result);
}

export async function AddGroup(req, res){
    const result = await services.GroupsService.AddGroup(req.body['group'].group, req.body['newGroupName'].newGroupName, req.body['id'].id);
    res.json(result);
}

export async function DeleteGroup(req, res){
    const result = await services.GroupsService.DeleteGroup(req.params.id);
    res.json(result);
}

export async function FlatteningGroup(req, res){
    const result = await services.GroupsService.FlatteningGroup(req.params.id);
    res.json(result);
}



export async function AddUserToExistingGroup(req, res){
    const result = await services.GroupsService.AddUserToExistingGroup(req.body, req.params.id);
    res.json(result);
}

export async function DeleteUserFromGroup(req, res){
    const result = await services.GroupsService.DeleteUserFromGroup(req.params.id1, req.params.id2);
    res.json(result);
}