import { formatDistanceToNow } from "date-fns";

const date = "2004-06-14 10:00:00";
document.body.textContent = `李冰凌实验五：${formatDistanceToNow(new Date(date))} ago`;


