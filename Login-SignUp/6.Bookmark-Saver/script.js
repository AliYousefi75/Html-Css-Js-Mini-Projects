const addBookmarkBtn = document.getElementById('add-bookmark');
const bookmarkList = document.getElementById('bookmark-list');
const bookmarkNameInput = document.getElementById('bookmark-name');
const bookmarkUrlInput = document.getElementById('bookmark-url');

document.addEventListener("DOMContentLoaded", loadBookmarks);

addBookmarkBtn.addEventListener('click',function(){
    const name = bookmarkNameInput.value.trim();
    const url = bookmarkUrlInput.value.trim();

    if(!name || !url){
        alert('please enter both name and url');
        return;
    }else{
        if(!url.startsWith('http://') && !url.startsWith('https://')){
            alert('please enter a valid url starting with http:// or https://');
            return;
        }

        addBookmark(name,url);
        saveBookmark(name,url);
        bookmarkNameInput.value ='';
        bookmarkUrlInput.value = '';
    }
});


function addBookmark(name,url){
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = url;
    link.textContent = name;
    link.target ='_blank';

    const removedButton = document.createElement('button');
    removedButton.textContent = 'Remove';
    removedButton.addEventListener('click',()=>{
        bookmarkList.removeChild(li);
        removeBookmarkFromStorage(name,url);
    });

    li.appendChild(link);
    li.appendChild(removedButton);
    bookmarkList.appendChild(li);
}

function getBookmarksFromStorage(){
    const bookmarks = localStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) :[];
}

function saveBookmark(name,url){
    const bookmarks = getBookmarksFromStorage();
    bookmarks.push({name,url});
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
}

function loadBookmarks(){
    const bookmarks = getBookmarksFromStorage();
    bookmarks.forEach((bookmark)=>addBookmark(bookmark.name,bookmark.url));
}

function removeBookmarkFromStorage(name,url){
    let bookmarks = getBookmarksFromStorage();
    bookmarks.filter((bookmark)=>bookmark.name !== name || bookmark.url !== url);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
}
