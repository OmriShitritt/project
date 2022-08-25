module.exports.makeFilterObject = queryObj => {
    const queryStr = JSON.stringify(queryObj).replace( //תרוץ על כל הסטרינג ותחליף מילים במידה ומצאת תשלח אותן לפונקציה
        /\b(lt|lte|gt|gte)/g,
        expr => '$' + expr
    ); //.תבחר מילים שמתאימות לך סלאש בי. במידה ומצאת תחליף אותן. סלאש ג'י תמשיך בכל המילים לא לעצור בראשונה שמצאת
    return JSON.parse(queryStr);
};