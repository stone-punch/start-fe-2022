const url = `https://dapi.kakao.com/v2/search/web?query=#query&page=1`;
const $docs = document.querySelector('.docs');
//const $query = document.querySelector('#query');
const $search_btn = document.querySelector('#search_btn');
const $query = document.querySelector('[name="query"]');

const $searchFoarm = document.querySelector('#searchFoarm');

function getFetch(url, callback) {
    const headers = {
      Authorization: 'KakaoAK 5da943aa5711c3062d4f184a20bf2bc4',
    };
  
    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => callback(data));
  }
  
function search() {
    const query = $query.value;
    const search_url = url.replace('#query',query);

    getFetch(search_url, (data) => {
        const { documents } = data;
        console.log(documents);

        const docs = documents.map((document) => {
            //console.log(document);
            return document.contents;
        });
        $docs.innerHTML = docs.join('<hr>');
    });
}
 /*  
$search_btn.addEventListener('click',search);
$query.addEventListener('keydown',()=>{
    if(event.key != 'Enter') return;
    search();
    
});
*/

$searchFoarm.addEventListener('submit',(event)=>{
    search();
    event.preventDefault();
});