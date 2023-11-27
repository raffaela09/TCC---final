import { Subject } from "rxjs"

export const notifications =  [
    {
        icon: 'bx bxs-file-pdf',
        subject: 'Visualize o pdf salvo',
        description: 'gjdnfgnd',
    },
    {
        icon: 'bx bx-cloud-upload' ,
        subject: 'Upload finalizado',
        description: 'gjdnfgnd',
    },
    {
        icon: 'bx bx-cloud-download',
        subject: 'Download finalizado',
        description: 'gjdnfgnd',
    },
];

export const userItems = [
    {
    routerlink: 'perfil',
       icon: 'bx bxs-user' ,
       label: 'Perfil'
    },
    {
        routerlink: 'login',
       icon: 'bx bxs-log-out' ,
       label: 'Sair'
    },
];
