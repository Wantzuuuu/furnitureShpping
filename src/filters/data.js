export default function (num) {
    const n = Number(num);
    const date = new Date(n * 1000);
    const dateValue = date.toISOString().split('T');
    return dateValue[0];
}