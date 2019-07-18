const MAIN_URL = 'http://localhost:3000/api'

export const api = {
  get token () {
    return localStorage.getItem('token');
  },

  auth: {
    login (credentials) {
      return fetch(`${MAIN_URL}/auth`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
    },
  },

  messages: {
    fetchMessages() {
      return fetch(`${MAIN_URL}/posts`, {
        method:  'GET',
      });
    },

    createMessage(message) {
      return fetch(`${MAIN_URL}/posts`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
    },

    updateMessage({id, ...text}) {
      return fetch(`${MAIN_URL}/posts/:${id}`, {
        method:  'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(text),
      });
    },

    deleteMessage(id) {
      return fetch(`${MAIN_URL}/posts/:${id}`, {
        method:  'DELETE',
      });
    }
  },

  users: {
    fetchUsers() {
      return fetch(`${MAIN_URL}/users`, {
        method:  'GET',
      });
    },

    createUser(user) {
      return fetch(`${MAIN_URL}/users`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    },

    deleteUser(id) {
      return fetch(`${MAIN_URL}/users/:${id}`, {
        method:  'DELETE',
      });
    },

    updateUser(user) {
      return fetch(`${MAIN_URL}/users/:${user.id}`, {
        method:  'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    },
  }
}