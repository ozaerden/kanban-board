angular.module("KendoDemos", ["kendo.directives"])
    .controller("MyCtrl", function ($scope) {

        var boardTemplate = '<div class="chart-2"><p><h4 class="h4-design"><strong>#: data.company #</strong></h4><br>#: data.name #<br>#: data.city #</label></p><hr></div>';

        $scope.datas = [
            {
                "company": "Company 1",
                "name": "Name 1",
                "city": "City 1"
            },
            {
                "company": "Company 2",
                "name": "Name 2",
                "city": "City 2"
            },
            {
                "company": "Company 3",
                "name": "Name 3",
                "city": "City 3"
            }
        ];
        
        $scope.boardOptions = {

            dataTextField: "rowName",
            dataValueField: "rowID",
            dropSources: ["board-col"],
            connectWith: "board-col",
            template: boardTemplate,
            dataSource: {
                serverFiltering: true,
                transport: {
                    read: function (options) {
                        options.success($scope.datas);
                    }
                }
            },
            draggable: {
                enabled: true,
                placeholder: function (element) {
                    return element.clone().css({
                        "opacity": 0.3,
                        "border": "1px dashed #000000"
                    });
                }
            }
        };

})