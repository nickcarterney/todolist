
const timerList : any = [];
//Wrong debounce code! has to clear All timers before make a new timer, instead of make a new Timer every call debounce() times
export const debounce = (callback: Function, wait: number) => {
    let timeoutId: number = 0;
    return (...args: unknown[]) => {
        timerList.forEach((timerItem : any)=> {
            window.clearTimeout(timerItem);
        })
        timeoutId = window.setTimeout(() => {
            callback(...args);
        }, wait);
        timerList.push(timeoutId);
    };
}