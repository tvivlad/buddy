import Topics from './pages/Topics'
import Dialogs from './pages/Dialogs'
import Statistics from './pages/Statistics'
import Auth from './pages/Auth'
import Registration from './pages/Registration'
import About from './pages/About'

export const authRoutes =[
    {
        path:'/topics',
        Component: <Topics/>
    },
    {
        path:'/topics'+ '/:id',
        Component: <Dialogs/>
    },
    {
        path:'/statistics',
        Component: <Statistics/>
    },

]

export const publicRoutes=[
    {
        path:'/auth',
        Component: <Auth/>
    },
    {
        path:'/registration',
        Component: <Registration/>
    },
    {
        path:'/about',
        Component: <About/>
    }
]