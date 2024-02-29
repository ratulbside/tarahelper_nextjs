export async function getBookDataFromGoogleAPI(isbn: string) {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    const response = await fetch(apiUrl); // TODO: Handle errors and retries

    if (!response.ok) {
        throw new Error('Failed to fetch book data from Google API');
    }

    return response.json;
}
export async function getBookDataFromOpenLibraryAPI(isbn: string) {
    const apiUrl = `https://openlibrary.org/search.json?q=${isbn}&fields=*&limit=1`;
    const response = await fetch(apiUrl); // TODO: Handle errors and retries

    if (!response.ok) {
        throw new Error('Failed to fetch book data from Open Library API');
    }

    return response.json;
}

export function getBooksFromJson() {
    return fetch('/data/books.json')
        .then((response) => response.json())
        .then((data) => {
            return data.data;
        });
}