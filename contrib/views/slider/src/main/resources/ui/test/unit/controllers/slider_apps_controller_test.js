/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

moduleFor('controller:sliderApps', 'App.SliderAppsController', {

  setup: function () {
    sinon.stub(Bootstrap.ModalManager, 'open', Em.K);
  },

  teardown: function () {
    Bootstrap.ModalManager.open.restore();
  }

});

test('showUnavailableAppsPopup', function () {

  var cases = [
      {
        message: 'message',
        result: 'message',
        title: 'errorMessage property should be set'
      },
      {
        result: Em.I18n.t('slider.apps.undefined.issue'),
        title: 'default error message'
      }
    ],
    controller = this.subject({
      errorMessage: null
    });

  cases.forEach(function (item) {

    Em.run(function () {
      controller.showUnavailableAppsPopup(item.message);
    });

    equal(controller.get('errorMessage'), item.result, item.title);

  });

});
