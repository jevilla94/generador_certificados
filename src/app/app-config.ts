export const Config = {
    LOCAL : {
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        CORE_SERVICE: 'http://localhost:8080/v1/',
        UBICACION_SERVICE: 'http://localhost:8083/v1/',
        TOKEN: {
            AUTORIZATION_URL: 'https://10.20.0.162:9443/oauth2/authorize',
            URL_USER_INFO: 'https://10.20.0.162:9443/oauth2/userinfo',
            CLIENTE_ID: 'bfPMflsiPVN6WFjJZIpzjsLdlx8a',
            CLIENT_SECRET: '4C_HkdaZsMF4Fthfm6D2n5joLzEa',
            REDIRECT_URL: 'http://localhost:9000/',
            RESPONSE_TYPE: 'code',
            SCOPE: 'openid email',
            BUTTON_CLASS: 'btn btn-warning btn-sm',
            SIGN_OUT_URL: 'https://10.20.0.162:9443/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
            SIGN_OUT_APPEND_TOKEN: 'true',
            REFRESH_TOKEN: 'https://10.20.0.162:9443/oauth2/token',
        },
    },

    PROD : {
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        TOKEN: {
            AUTORIZATION_URL: 'https://10.20.0.162:9443/oauth2/authorize',
            URL_USER_INFO: 'https://10.20.0.162:9443/oauth2/userinfo',
            CLIENTE_ID: '',
            REDIRECT_URL: '',
            RESPONSE_TYPE: 'code',
            SCOPE: 'openid email',
            SIGN_OUT_URL: 'https://10.20.0.162:9443/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
            REFRESH_TOKEN: 'https://10.20.0.162:9443/oauth2/token',
            CLIENT_SECRET: '',
        },
    },
    PREPROD : {
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        TOKEN: {
            AUTORIZATION_URL: 'https://10.20.0.162:9443/oauth2/authorize',
            URL_USER_INFO: 'https://10.20.0.162:9443/oauth2/userinfo',
            CLIENTE_ID: 'XdBq4QOfEZYT0cl_8qDh3fmF5_Qa',
            REDIRECT_URL: 'http://administrativa.portaloas.udistrital.edu.co/',
            RESPONSE_TYPE: 'code',
            SCOPE: 'openid email',
            BUTTON_CLASS: 'btn btn-warning btn-sm',
            SIGN_OUT_URL: 'https://10.20.0.162:9443/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://administrativa.portaloas.udistrital.edu.co/',
            SIGN_OUT_APPEND_TOKEN: 'true',
            REFRESH_TOKEN: 'https://10.20.0.162:9443/oauth2/token',
            CLIENT_SECRET: 'lrVuDATX1o8TfXxz_jrEzBA2iIoa',
        },
    },
};
