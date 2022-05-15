//const url = `https://dapi.kakao.com/v2/search/web?query=#query&page=2`;
let page_num = 1;

const $docs = document.querySelector('.docs');
//const $query = document.querySelector('#query');
const $search_btn = document.querySelector('#search_btn');
const $query = document.querySelector('[name="query"]');

const $more_btn = document.querySelector('#more_btn');

const $searchFoarm = document.querySelector('#searchFoarm');

function getFetch(url, callback) {
    const headers = {
      Authorization: 'KakaoAK 5da943aa5711c3062d4f184a20bf2bc4',
    };
  
    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => callback(data));
  }
  
function search(page) {
    const query = $query.value;

    const search_url = `https://dapi.kakao.com/v2/search/web?query=${query}&page=${page}`;
    //const search_url = url.replace('#query',query);
   // const url = `https://dapi.kakao.com/v2/search/web?query=${query}&page=${page_num}`;

    getFetch(search_url, (data) => {
        const { documents } = data;
        console.log(documents);

        const docs = documents.map((document) => {
            //console.log(document);
            return document.contents;
        });
        $docs.innerHTML += docs.join('<hr>');
    });
}
 /*  
$search_btn.addEventListener('click',search);
$query.addEventListener('keydown',()=>{
    if(event.key != 'Enter') return;
    search();
    
});
*/

function more_page(){
    page_num ++;
    search(page_num);

}

$more_btn.addEventListener('click',more_page);

$searchFoarm.addEventListener('submit',(event)=>{
    search(page_num);
    event.preventDefault();
});