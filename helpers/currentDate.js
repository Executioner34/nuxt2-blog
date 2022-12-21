/**
 * @module helpers/currentDate.js
 * @desc - возвращает текущую дату в виде строки
 */

const currentDate = () => new Date().toLocaleDateString();

export default currentDate;
