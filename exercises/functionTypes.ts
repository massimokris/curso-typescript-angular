// function type is a representation of a type to structure a function 
type CallBackError = Error | null;
type CallBack = (error: CallBackError, response: Object) => void;
type SendRequest = (cb: CallBack) => void;

const sendRequest: SendRequest = (cb: CallBack): void => {
    if(cb) {
        cb(null, {message: 'everything is good'});
    }
}