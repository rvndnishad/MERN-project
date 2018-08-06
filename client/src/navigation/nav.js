export default {
    items: [
      {
        title:true,
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
      },
      {
        name: 'Buzz Index',
        icon: 'icon-globe',
        url: '/buzzindex',
        
        children: [
          {
            name: 'Actor/ Actress specific',
            icon: 'icon-people',
            url: '/buzzindex/actor'
          },
          {
            name: 'Quarter wise/ festive time',
            icon: 'icon-speedometer',
            url: '/buzzindex/Quarter'
          },
          {
            name: 'Box Office collection',
            icon: 'icon-folder-alt',
            url: '/buzzindex/collection'
      
          },
          {
            name: 'Weekly Buzz Index Score',
            icon: 'icon-calculator',
            url: '/buzzindex/IndexScore'
          },
          {
            name: 'Production house',
            icon: 'icon-camrecorder',
            url: '/buzzindex/Production'
      
          }
        ],
      },
      {
        name: 'CAM',
        url: '/cam',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Category snapshot',
            url: '/cam/Category-snapshot',
            icon: 'icon-cursor',
          },
          {
            name: 'Top brands (month on month)',
            url: '/cam/Top-brands',
            icon: 'icon-cursor',
          },
          {
            name: 'Reach',
            url: '/cam/Reach',
            icon: 'icon-cursor',
          },
          {
            name: 'Zone wise breakup',
            url: '/cam/Zone-wise-breakup',
            icon: 'icon-cursor',
          },
          {
            name: 'Chain wise breakup',
            url: '/cam/Chain-wise-breakup',
            icon: 'icon-cursor'
          },
          {
            name: 'Unaided Ad recall',
            url: '/cam/Unaided-Ad-recall',
            icon: 'icon-cursor'
          },
        ]
      },
      {
        name: 'Ad Impact',
        url: '/ad-impact',
        icon: 'icon-calculator',
        children: [
          {
            name: 'Category wise data',
            url: '/ad-impact/Category-wise-data',
            icon: 'icon-calculator',
          },
          {
            name: 'Total Ad Recall',
            url: '/ad-impact/Total-Ad-Recall',
            icon: 'icon-calculator',
          },
          {
            name: 'Category usage behavior',
            url: '/ad-impact/Category-usage-behavior',
            icon: 'icon-calculator',
          },
          {
            name: 'Intention-to-purchase',
            url: '/ad-impact/Intention-to-purchase',
            icon: 'icon-calculator',
          }
        ]
      },
      {
        name: 'BINGO',
        url: '/bingo',
        icon: 'icon-bell',
        children: [
          {
            name: 'Media spends required',
            url: '/bingo/Media spends required',
            icon: 'icon-bell',
          },
          {
            name: 'Reach achieved',
            url: '/bingo/Reach achieved',
            icon: 'icon-bell',
          }
        ]
      },
      {
        name: 'UPCOMING MOVIE RELEASE',
        url: '/upcoming-movie-release',
        icon: 'icon-star',
        children: [
          {
            name: 'Upcoming movie releases',
            url: '/upcoming-movie-release/Upcoming-movie-releases',
            icon: 'icon-star',
          },
          {
            name: 'Bollywood/ Hollywood/ Regional',
            url: '/upcoming-movie-release/Bollywood-Hollywood-Regional',
            icon: 'icon-star',
          }
        ]
      },
      {
        name: 'Contact Development',
        url: 'http://coreui.io/react/',
        class: 'mt-auto',
        variant: 'primary',
      }
    ],
  };
  