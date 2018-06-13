import * as services from './../../Services';

export async function ff(req, res){
    const hello = await services.UsersService.ff(req.params.id);

    res.json(hello);
}

export async function AddUser(req, res){
    const hello = await services.UsersService.ff(req.params.id);

    res.json(hello);
}