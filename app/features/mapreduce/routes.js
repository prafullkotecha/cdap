angular.module(PKG.name + '.feature.mapreduce')
  .config(function($stateProvider, $urlRouterProvider, MYAUTH_ROLE) {
    $stateProvider
      .state('mapreduce', {
        url: '/mapreduce',
        abstract: true,
        parent: 'programs',
        data: {
          authorizedRoles: MYAUTH_ROLE.all,
          highlightTab: 'development'
        },
        template: '<ui-view/>'
      })
      .state('mapreduce.list', {
        url: '/list',
        templateUrl: '/assets/features/mapreduce/templates/list.html',
        controller: 'MapreduceListController',
        ncyBreadcrumb: {
          parent: 'apps.detail.overview',
          label: 'Mapreduce'
        }
      })
      .state('mapreduce.detail', {
        url: '/:programId',
        templateUrl: '/assets/features/mapreduce/templates/detail.html',
        controller: 'MapreduceDetailController',
        onEnter: function($state, $timeout) {

          $timeout(function() {
            if ($state.is('mapreduce.detail')) {
              $state.go('mapreduce.detail.runs');
            }
          });

        },
        ncyBreadcrumb: {
          parent: 'apps.detail.overview',
          label: '{{$state.params.programId | caskCapitalizeFilter}}'
        }
      })
        .state('mapreduce.detail.runs', {
          url: '/runs',
          templateUrl: '/assets/features/mapreduce/templates/tabs/runs.html',
          controller: 'MapreduceDetailRunController',
          ncyBreadcrumb: {
            skip: true
          }
        })

          .state('mapreduce.detail.runs.tab', {
            url: '/:runId',
            template: '<ui-view/>',
            abstract: true
          })
            .state('mapreduce.detail.runs.tab.status', {
              url: '/status',
              template: '<div> Status: {{$state.params.runId}} </div>',
              ncyBreadcrumb: {
                skip: true
              }
            })
            .state('mapreduce.detail.runs.tab.distribution', {
              url: '/distribution',
              template: '<div> Distribution: {{$state.params.runId}} </div>',
              ncyBreadcrumb: {
                skip: true
              }
            })
            .state('mapreduce.detail.runs.tab.list', {
              url: '/list',
              template: '<div> List: {{$state.params.runId}} </div>',
              ncyBreadcrumb: {
                skip: true
              }
            })
            .state('mapreduce.detail.runs.tab.data', {
              url: '/data',
              template: '<div> Data: {{$state.params.runId}} </div>',
              ncyBreadcrumb: {
                skip: true
              }
            })
            .state('mapreduce.detail.runs.tab.configuration', {
              url: '/configuration',
              template: '<div> Configuration: {{$state.params.runId}} </div>',
              ncyBreadcrumb: {
                skip: true
              }
            })
        .state('mapreduce.detail.schedules', {
          url: '/schedules',
          templateUrl: '/assets/features/mapreduce/templates/tabs/schedules.html',
          ncyBreadcrumb: {
            skip: true
          }
        })
        .state('mapreduce.detail.metadata', {
          url: '/metadata',
          templateUrl: '/assets/features/mapreduce/templates/tabs/metadata.html',
          ncyBreadcrumb: {
            skip: true
          }
        })
        .state('mapreduce.detail.history', {
          url: '/history',
          templateUrl: '/assets/features/mapreduce/templates/tabs/history.html',
          ncyBreadcrumb: {
            skip: true
          }
        })
        .state('mapreduce.detail.logs', {
          url: '/log',
          templateUrl: '/assets/features/mapreduce/templates/tabs/log.html',
          controller: 'MapreduceLogsController',
          ncyBreadcrumb: {
            skip: true
          }
        })
          .state('mapreduce.detail.logs.all', {
            url: '/all',
            templateUrl: '/assets/features/mapreduce/templates/tabs/logs/tabTemplate.html',
            ncyBreadcrumb: {
              skip: true
            }
          })
          .state('mapreduce.detail.logs.info', {
            url: '/info',
            templateUrl: '/assets/features/mapreduce/templates/tabs/logs/tabTemplate.html',
            ncyBreadcrumb: {
              skip: true
            }
          })
          .state('mapreduce.detail.logs.warn', {
            url: '/warn',
            templateUrl: '/assets/features/mapreduce/templates/tabs/logs/tabTemplate.html',
            ncyBreadcrumb: {
              skip: true
            }
          })
          .state('mapreduce.detail.logs.error', {
            url: '/error',
            templateUrl: '/assets/features/mapreduce/templates/tabs/logs/tabTemplate.html',
            ncyBreadcrumb: {
              skip: true
            }
          })
          .state('mapreduce.detail.logs.debug', {
            url: '/debug',
            templateUrl: '/assets/features/mapreduce/templates/tabs/logs/tabTemplate.html',
            ncyBreadcrumb: {
              skip: true
            }
          })
          .state('mapreduce.detail.logs.other', {
            url: '/other',
            templateUrl: '/assets/features/mapreduce/templates/tabs/logs/tabTemplate.html',
            ncyBreadcrumb: {
              skip: true
            }
          })
        .state('mapreduce.detail.resources', {
          url: '/resources',
          templateUrl: '/assets/features/mapreduce/templates/tabs/resources.html',
          ncyBreadcrumb: {
            skip: true
          }
        });
  });
