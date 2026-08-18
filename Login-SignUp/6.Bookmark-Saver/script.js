// const addBookmarkBtn = document.getElementById('add-bookmark');
// const bookmarkList = document.getElementById('bookmark-list');
// const bookmarkNameInput = document.getElementById('bookmark-name');
// const bookmarkUrlInput = document.getElementById('bookmark-url');

// document.addEventListener("DOMContentLoaded", loadBookmarks);

// addBookmarkBtn.addEventListener('click',function(){
//     const name = bookmarkNameInput.value.trim();
//     const url = bookmarkUrlInput.value.trim();

//     if(!name || !url){
//         alert('please enter both name and url');
//         return;
//     }else{
//         if(!url.startsWith('http://') && !url.startsWith('https://')){
//             alert('please enter a valid url starting with http:// or https://');
//             return;
//         }

//         addBookmark(name,url);
//         saveBookmark(name,url);
//         bookmarkNameInput.value ='';
//         bookmarkUrlInput.value = '';
//     }
// });


// function addBookmark(name,url){
//     const li = document.createElement('li');
//     const link = document.createElement('a');
//     link.href = url;
//     link.textContent = name;
//     link.target ='_blank';

//     const removedButton = document.createElement('button');
//     removedButton.textContent = 'Remove';
//     removedButton.addEventListener('click',()=>{
//         bookmarkList.removeChild(li);
//         removeBookmarkFromStorage(name,url);
//     });

//     li.appendChild(link);
//     li.appendChild(removedButton);
//     bookmarkList.appendChild(li);
// }

// function getBookmarksFromStorage(){
//     const bookmarks = localStorage.getItem('bookmarks');
//     return bookmarks ? JSON.parse(bookmarks) :[];
// }

// function saveBookmark(name,url){
//     const bookmarks = getBookmarksFromStorage();
//     bookmarks.push({name,url});
//     localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
// }

// function loadBookmarks(){
//     const bookmarks = getBookmarksFromStorage();
//     bookmarks.forEach((bookmark)=>addBookmark(bookmark.name,bookmark.url));
// }

// function removeBookmarkFromStorage(name,url){
//     let bookmarks = getBookmarksFromStorage();
//     bookmarks.filter((bookmark)=>bookmark.name !== name || bookmark.url !== url);
//     localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
// }




const addBookmarkBtn = document.getElementById('add-bookmark');
const bookmarkList = document.getElementById('bookmark-list');
const bookmarkNameInput = document.getElementById('bookmark-name');
const bookmarkUrlInput = document.getElementById('bookmark-url');

document.addEventListener("DOMContentLoaded", loadBookmarks);

// ==========================================
// ۱. اضافه کردن بوکمارک (رویداد)
// ==========================================
addBookmarkBtn.addEventListener('click', function() {
    const name = bookmarkNameInput.value.trim();
    const url = bookmarkUrlInput.value.trim();

    // اعتبارسنجی
    if (!name || !url) {
        alert('Please enter both name and URL');
        return;
    }

    // بررسی URL (اصلاح شده)
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert('Please enter a valid URL starting with http:// or https://');
        return;
    }

    // اضافه کردن
    addBookmark(name, url);
    saveBookmark(name, url);
    
    // پاک کردن فرم
    bookmarkNameInput.value = '';
    bookmarkUrlInput.value = '';
    bookmarkNameInput.focus();
});

// ==========================================
// ۲. اضافه کردن بوکمارک به DOM
// ==========================================
function addBookmark(name, url) {
    const li = document.createElement('li');
    
    const link = document.createElement('a');
    link.href = url;
    link.textContent = name;
    link.target = '_blank';
    link.rel = 'noopener noreferrer'; // امنیت بیشتر

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    
    // اصلاح: استفاده از remove() به جای removeChild
    removeButton.addEventListener('click', () => {
        li.remove(); // حذف از DOM
        removeBookmarkFromStorage(name, url);
    });

    li.appendChild(link);
    li.appendChild(removeButton);
    bookmarkList.appendChild(li);
}

// ==========================================
// ۳. خواندن از localStorage
// ==========================================
function getBookmarksFromStorage() {
    const bookmarks = localStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
}

// ==========================================
// ۴. ذخیره در localStorage
// ==========================================
function saveBookmark(name, url) {
    const bookmarks = getBookmarksFromStorage();
    bookmarks.push({ name, url });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// ==========================================
// ۵. بارگذاری بوکمارک‌ها هنگام شروع
// ==========================================
function loadBookmarks() {
    const bookmarks = getBookmarksFromStorage();
    bookmarks.forEach((bookmark) => addBookmark(bookmark.name, bookmark.url));
}

// ==========================================
// ۶. حذف از localStorage (اصلاح شده)
// ==========================================
function removeBookmarkFromStorage(name, url) {
    let bookmarks = getBookmarksFromStorage();
    
    // اصلاح: نتیجه filter را ذخیره کن
    bookmarks = bookmarks.filter((bookmark) => {
        // اگر نام یا url متفاوت باشد، نگه دار
        return bookmark.name !== name || bookmark.url !== url;
    });
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
