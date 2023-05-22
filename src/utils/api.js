class Api {
    constructor(opt) {
        this._baseUrl = opt.baseUrl;
        this._headers = opt.headers;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
            .then(res => {
                return this._getResponseData(res);
            });
    }

    getUser() {
        return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
            .then(res => {
                return this._getResponseData(res);
            });
    }

    setUser({ name, job: about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about,
            })
        }).then(res => {
            return this._getResponseData(res);
        });
    }

    setAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link
            })
        }).then(res => {
            return this._getResponseData(res);
        });
    };

    addCard({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        }).then(res => {
            return this._getResponseData(res);
        });
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(res => {
            return this._getResponseData(res);
        });
    }

    setLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        }).then(res => {
            return this._getResponseData(res);
        });
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(res => {
            return this._getResponseData(res);
        });
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
    headers: {
        authorization: 'd07ea27d-96e0-4847-8c63-3989714313d5',
        'Content-Type': 'application/json'
    }
});

export default api;
