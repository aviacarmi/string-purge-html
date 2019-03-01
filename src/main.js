import stripHtml from "string-strip-html";

export default function purgeHtml(strings, ...values){
    return strings.reduce((result, string, i) => {
      if(string == "" || string == " ")
      {
        return `${result} ${values[i] || ''}`;  
      }
      else{
        return `${result} ${stripHtml(string)} ${values[i] || ''}`;
      }
    }, '').trim();
};