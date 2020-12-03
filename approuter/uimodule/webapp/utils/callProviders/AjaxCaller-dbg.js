sap.ui.define([], function() {
  "use strict";
  return {
    get: async (url, path, id) => {
      let oReturn = null;
      const settings = {
        url: url + path + id,
        method: "GET",
        timeout: 0
      };

      await $.ajax(settings).done(function(response) {
        oReturn = response;
      });
      return oReturn;
    },
    post: async (url, path, data) => {
      let oReturn = null;
      const settings = {
        url: url + path,
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
      };

      await $.ajax(settings).done(function(response) {
        oReturn = response;
      });

      return oReturn;
    },
    delete: async (url, path, id) => {
      let oReturn = null;

      const settings = {
        url: url + path + id,
        method: "DELETE",
        timeout: 0
      };
      await $.ajax(settings).done(function(response) {
        oReturn = response;
      });
      return oReturn;
    },
    put: async (url, path, id, data) => {
      let oReturn = null;

      const settings = {
        url: url + path + id,
        method: "PUT",
        timeout: 0,
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
      };
      await $.ajax(settings).done(function(response) {
        oReturn = response;
      });
      return oReturn;

    },
    getAll: async (url, path) => {
      let oReturn = null;
      const settings = {
        url: url + path,
        method: "GET",
        timeout: 0
      };
      await $.ajax(settings).done(function(response) {
        oReturn = response;
      });

      return oReturn;
    }
  };
});
