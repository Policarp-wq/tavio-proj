export type FieldValidator = (val: any) => boolean;
export class FormValidator{
    constructor(public validatingObject: { [key: string]: any }, public setter: (obj: any, key: string, val: any) => void) {}
    private _validator: {[key: string]: FieldValidator} = {};
    private _isValid = true;
    public handleFieldChanged(key : string, val: any){
        if(!(key in this.validatingObject))
            return;
        this.validatingObject[key] = val;
        this.setter(this.validatingObject, key, val);
        this.validate();
    }
    private validate(){
        this._isValid = true;
        for (const [key, val] of Object.entries(this.validatingObject)) {
            if(key in this._validator)
                this._isValid = this._isValid && this._validator[key](val);
            this._isValid = this._isValid && (typeof val === 'string' || Array.isArray(val) ? val.length > 0 : true);
            if(!this._isValid)
                return;
        }
    }
    public isValid(){
        return this._isValid;
    } 
}
