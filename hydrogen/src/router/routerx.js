
import bodyer from '../components/bodyer'
import love from '../components/one'
import man from '../components/heroman'


export default 
     [
        {
        path : '/love',
        components : {
            a : love,
            b : bodyer
        }
    },
    {
        path : '/man',
        name : 'heroman',
        component : man
    }
]
