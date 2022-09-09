
import mock from "./mockConfig";
import serverUrl from "../../services/serverUrl";



if (mock) {
  mock.onGet(serverUrl + 'api/brand/list').reply(200,
    [
      {
        name: 'brand 1',
        image: 'brand1.jpeg'
      },
      {
        name: 'brand 2',
        image: 'brand2.png'
      },
    ]
  );


  mock.onGet(serverUrl + 'api/brand/menu/0').reply(200,
    [
      {
        label: 'Summary',
        url: '/summary',
        icon: 'summary.svg'
      },
      {
        label: 'Publish',
        url: '/publish',
        icon: 'publish.svg',
        children: [
          {
            label: 'Compose',
            url: '/publish/compose',
          },
          {
            label: 'Feed',
            url: '/publish/feed',
          },
        ]
      },
      {
        label: 'Engage',
        url: '/engage',
        icon: 'chat.svg'
      },
      {
        label: 'Listen',
        url: '/listen',
        icon: 'waves.svg'
      },
      {
        label: 'Report',
        url: '/report',
        icon: 'report.svg'
      },
    ]
  );


  mock.onGet(serverUrl + 'api/brand/menu/1').reply(200,
    [
      {
        label: 'Summary',
        url: '/summary',
        icon: 'summary.svg'
      },
      {
        label: 'Publish',
        url: '/publish',
        icon: 'publish.svg',
        children: [
          {
            label: 'Feed',
            url: '/publish/feed',
          },
        ]
      },
      {
        label: 'Listen',
        url: '/listen',
        icon: 'waves.svg'
      },
    ]
  );



}

export {

}