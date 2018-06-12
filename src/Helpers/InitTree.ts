import StateStore from "../state/StateStore";
import * as $ from "jquery";
import Imember from "../Model/Imember";


export class InitTree {
    data : Imember[];
    static NeedIgnore = false;

    constructor(public element : any, public Alldata : Imember[]){
        this.data = Alldata;
        let ul = document.querySelector("ul");
        if (ul)
            ul.onkeyup = this.keyup;
        this.Load();
    }


    public Load(){
        this.clear();
        this._Load(this.data, '', 0);
    }


    private _Load(data : Imember[], parent : any, indentation : number) {

        for (let i = 0; i < data.length; i++) {
            let image = document.createElement("img");
            image.style.margin = "5px";
            image.style.verticalAlign = "middle";
            image.src = "/TreeImages/singleUser.png";

            let img = $(image);
            let span = $("<span>");
            img.appendTo(span);

            let liTmp = document.createElement("li");
            liTmp.style.textIndent = indentation + "px";
            let li = $(liTmp);

            span.appendTo(li);
            let dd = data[i].getType();
            li.addClass(dd);
            li.append(data[i].getName());
            li.appendTo(this.element);
            li.on('dblclick', () => {
                this.dblclick();
            });
            li.on('click', this.click);
            li.data('parent', parent);

            if (indentation > 0) {
                li.addClass('hidden');
                if (!parent.data('items')) {
                    parent.data('items', []);
                    parent.data('items').push(li);
                }
                else
                    parent.data('items').push(li);
            }

            if (data[i].getItems().length > 0) {
                img.attr("src", "/TreeImages/multipleUsers.png");

                for (let i = 0; i < data[i].getItems().length; i++)
                    this._Load(data[i].getItems(), li, indentation + 25);
            }
        }
    }

    clear(){
        this.element[0].innerHTML = '';
    }

    dblclick(){
        let parent = this.element.find('.inFocus');
        if(parent.length === 0)
            return;
        else{
            let children = $(parent).data('items');
            if(!!children){
                for(let item of children){
                    item.toggleClass('hidden');
                    InitTree.hiddenChildrenRecursive($(item).data('items'));
                }
            }
        }
    }

    static hiddenChildrenRecursive(items : any){
        if(!items)
            return;
        for(let item of items){
            item.addClass('hidden');
            InitTree.hiddenChildrenRecursive($(item).data('items'));
        }
    }

    click(){
        InitTree.clearFocusClass();

        $(this).addClass('inFocus');
        console.log('click');
        InitTree.inFocusChanged();
    }

    static inFocusChanged(){
        let itemFocused = $('.inFocus');

        let pathArr : string[] = [];
        while(typeof (itemFocused) !== 'string' ){
            pathArr.splice(0, 0, itemFocused.text());
            itemFocused = itemFocused.data('parent');
        }
        let Reciver = InitTree.getMemberFromPathArr(pathArr, StateStore.getInstance().get('Data'), 0);
        StateStore.getInstance().set('Reciver', Reciver);
    }

    static getMemberFromPathArr(pathArr : string[], data : Imember[], index : number) : Imember | null{
        for(let i=0 ; i<data.length ; i++){
            if(pathArr[index] === data[i].getName()){
                if(pathArr.length-1 === index)
                    return data[i];
                else {
                    return InitTree.getMemberFromPathArr(pathArr, data[i].getItems(), ++index);
                }
            }
        }
        return null;
    }


    static clearFocusClass() {
         let itemFocused = $('.inFocus');
         itemFocused.removeClass('inFocus');
     }

    keyup = (e: any) => {
        e.stopPropagation();

        switch(e.key){
            case 'ArrowRight':
                this.ArrowRight();
                InitTree.inFocusChanged();
                break;
            case 'ArrowLeft':
                this.ArrowLeft();
                InitTree.inFocusChanged();
                break;
            case 'ArrowUp':
                this.ArrowUp();
                InitTree.inFocusChanged();
                break;
            case 'ArrowDown':
                this.ArrowDown();
                InitTree.inFocusChanged();
                break;
            case 'Enter':
                this.Enter();
                break;
        }

        console.log('keypress');
    };


    ArrowRight(){
        let parent = this.element.find('.inFocus');
        let children = $(parent).data('items');
        if(parent.length > 0 && !!children){
            for(let item of children){
                item.removeClass('hidden');
            }
        }
    }

    ArrowLeft(){
        let parent = this.element.find('.inFocus');
        let children = $(parent).data('items');

        if(parent.length === 0)
            return;
        else if(!children || children[0].hasClass('hidden')){
            if($(parent).data('parent') !== '') {
                InitTree.clearFocusClass();
                $(parent).data('parent').addClass('inFocus');
            }
        }
        else{
            for(let item of children){
                item.addClass('hidden');
                InitTree.hiddenChildrenRecursive($(item).data('items'));
            }
        }
    }

    ArrowUp(){
        let current = this.element.find('.inFocus');
        if(current.length === 0)
            return;
        else {
            let arrLi =  this.element.find('li:not(.hidden)');

            for(let index = arrLi.length-1 ; index >= 0 ; index--){
                if($(arrLi[index]).text() === current.text() &&
                    $(arrLi[index]).data('parent') === current.data('parent') &&
                    (index-1) >= 0){
                    InitTree.clearFocusClass();
                    $(arrLi[index - 1]).addClass('inFocus');
                    break;
                }
            }
        }
    }

    ArrowDown(){
        let current = this.element.find('.inFocus');
        if(current.length === 0)
            $(this.element.find('li')[0]).addClass('inFocus');
        else {
            let arrLi =  this.element.find('li:not(.hidden)');

            for(let index = 0 ; index <arrLi.length ; index++){
                if($(arrLi[index]).text() === current.text() &&
                    $(arrLi[index]).data('parent') === current.data('parent') &&
                    (index+1) < arrLi.length ){
                    InitTree.clearFocusClass();
                    $(arrLi[index + 1]).addClass('inFocus');
                    break;
                }
            }
        }
    }

    Enter(){
        this.dblclick();
    }

}


