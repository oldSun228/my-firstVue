import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import HelloWorld from '@/components/HelloWorld';
import testOne from '@/components/testOne';
import testTwo from '@/components/testTwo';
import testThree from '@/components/testThree';
import testFour from '@/components/testFour';
import message from '@/components/message';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/helloworld',
            name: 'helloworld',
            component: HelloWorld,
            children: [
                {
                    path: '',
                    name: 'testOne',
                    component: testOne
                },
                {
                    path: '/testOne',
                    name: 'testOne',
                    component: testOne
                },
                {
                    path: '/testTwo',
                    name: 'testTwo',
                    component: testTwo
                },
                {
                    path: '/testThree',
                    name: 'testThree',
                    component: testThree
                },
                {
                    path: '/testFour',
                    name: 'testFour',
                    component: testFour
                },
            ]
        },
        {
            path: '/message',
            name: 'message',
            component: message
        },
    ]
})
