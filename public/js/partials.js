(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/forgot-password/forgot-password.component.html',
    '<form ng-submit="vm.submit()" class="ForgotPassword-form">\n' +
    '    <div>\n' +
    '        <md-input-container>\n' +
    '            <label>Email</label>\n' +
    '            <input type="email" ng-model="vm.email">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Submit</md-button>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/login-form/login-form.component.html',
    '<form ng-submit="vm.login()">\n' +
    '	<div>\n' +
    '		<md-input-container class="LoginForm-inputContainer">\n' +
    '			<label>Email</label>\n' +
    '			<input type="email" ng-model="vm.email">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="LoginForm-inputContainer">\n' +
    '			<label>Password</label>\n' +
    '			<input type="password" ng-model="vm.password">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<md-button type="submit" class="LoginForm-submit md-primary md-raised">Log in</md-button>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/register-form/register-form.component.html',
    '<form ng-submit="vm.register()">\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Name</label>\n' +
    '			<input type="text" ng-model="vm.name">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Email</label>\n' +
    '			<input type="email" ng-model="vm.email">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Password</label>\n' +
    '			<input type="password" ng-model="vm.password">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<md-button type="submit" class="RegisterForm-submit md-primary md-raised">Register</md-button>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/reset-password/reset-password.component.html',
    '<form ng-submit="vm.submit()">\n' +
    '\n' +
    '    <div ng-if="!vm.isValidToken" layout="row" layout-align="center center">\n' +
    '        <md-progress-circular md-mode="indeterminate"></md-progress-circular>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="vm.isValidToken">\n' +
    '        <md-input-container class="ResetPassword-input">\n' +
    '            <label>Password</label>\n' +
    '            <input type="password" ng-model="vm.password">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container class="ResetPassword-input">\n' +
    '            <label>Confirm Password</label>\n' +
    '            <input type="password" ng-model="vm.password_confirmation">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Submit</md-button>\n' +
    '    </div>\n' +
    '\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/about/about.page.html',
    '<div id="index-banner" class="parallax-container valign-wrapper">\n' +
    '    <div class="section no-pad-bot valign z1">\n' +
    '      <div class="container">\n' +
    '\n' +
    '        <div class="row center">\n' +
    '          <div class="center">\n' +
    '            <h1 class="center text-lighten-2 white-text">About us</h1>\n' +
    '            \n' +
    '          </div>\n' +
    '          <!-- <div class="row center">\n' +
    '            <a href="#exec" id="download-button" class="btn-large waves-effect waves-light brand-blue button-home">Executive Suite</a>\n' +
    '            <a href="#deluxe" id="download-button" class="btn-large waves-effect waves-light brand-blue button-home">Deluxe Suite</a>\n' +
    '          </div> -->\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax z0"><img src="http://lvcounseling.com/admin/wp-content/uploads/2013/04/beach-couple.jpg" alt="Unsplashed background img 1"></div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="container">\n' +
    '    <div class="section">\n' +
    '      <div class="row" id="">\n' +
    '        <!-- <div class="col s12 m6 l6">\n' +
    '          <img class="responsive-img" src="http://blog.fitnesstrainer.com/wp-content/uploads/2015/06/omega3.jpg" alt="">\n' +
    '        </div>\n' +
    '        <div class="col s12 m6 l6">\n' +
    '          <p class="flow-text brand-orange-text"><b>Lindsay &amp; Kevin</b></p>\n' +
    '          <blockquote>\n' +
    '		    Love to travel. Rely greatly on trusted locals wherever I travel and would like to share my knowledge of the Red Beach area. Life is a journey, travel it!\n' +
    '		  </blockquote>\n' +
    '          <p class=" ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n' +
    '          <p class=" ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> -->  \n' +
    '        <div class="col s12 m12 l12">\n' +
    '        	<article>\n' +
    '        		<figure>\n' +
    '        			<img class="responsive-img left about-headshot a100" src="http://blog.fitnesstrainer.com/wp-content/uploads/2015/06/omega3.jpg" width="50%" alt="">\n' +
    '        		</figure>\n' +
    '        		<p class="flow-text brand-orange-text"><b>Lindsay &amp; Kevin</b></p>\n' +
    '        		<div>\n' +
    '        			<blockquote class="table">\n' +
    '					    Love to travel. Rely greatly on trusted locals wherever I travel and would like to share my knowledge of the Red Beach area. Life is a journey, travel it!\n' +
    '					</blockquote>\n' +
    '        		</div>\n' +
    '        		<p class=" ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n' +
    '          		<p class=" ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>\n' +
    '        	</article>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="parallax-container valign-wrapper">\n' +
    '    <div class="z1 section no-pad-bot valign">\n' +
    '      <div class="container">\n' +
    '\n' +
    '        <div class="row center">\n' +
    '          <div class="center">\n' +
    '            <h1 class="center text-lighten-2 white-text">About the house</h1>\n' +
    '            \n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax z0">\n' +
    '    	<img src="http://www.funchap.com/wp-content/uploads/2015/08/nice-caribbean-beach-wallpaper-2015.jpg" alt="Unsplashed background img 2">\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="container">\n' +
    '    <div class="section">\n' +
    '  	<div class="row">\n' +
    '  		<div class="col s12 m6 l6 " id="left-div">\n' +
    '		  	<p class="flow-text brand-orange-text left about-gallery-title">\n' +
    '		  		<b>Red Beach</b>\n' +
    '		  	</p>\n' +
    '		  	<p class="margin-top-21 margin-top-10-s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptate amet nam unde, impedit dolorem voluptates repudiandae earum quibusdam deleniti ipsum quae ab consequuntur accusamus aperiam obcaecati cumque nulla consectetur?</p>\n' +
    '  		</div>\n' +
    '  		<div class="col s12 m6 l6" id="right-div">\n' +
    '  		  <blockquote>\n' +
    '  		  			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n' +
    '  		  </blockquote>\n' +
    '  		</div>\n' +
    '  	</div>\n' +
    '      <div class="row valign-wrapper" id="block">\n' +
    '        <div class="col s12 m12 center valign">\n' +
    '      		\n' +
    '          <div class="slider">\n' +
    '		    <ul class="slides">\n' +
    '		      <li>\n' +
    '		        <img src="http://www.ahstatic.com/photos/6318_ro_00_p_1024x768.jpg"> <!-- random image -->\n' +
    '		        <div class="caption center-align">\n' +
    '		          <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '		        </div>\n' +
    '		      </li>\n' +
    '		      <li>\n' +
    '		        <img src="http://www.ahstatic.com/photos/6318_ro_03_p_1024x768.jpg"> <!-- random image -->\n' +
    '		        <div class="caption left-align">\n' +
    '		          <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '		        </div>\n' +
    '		      </li>\n' +
    '		      <li>\n' +
    '		        <img src="http://www.ahstatic.com/photos/6318_ro_04_p_1024x768.jpg"> <!-- random image -->\n' +
    '		        \n' +
    '		      </li>\n' +
    '		      <li>\n' +
    '		        <img src="http://www.ahstatic.com/photos/6318_ro_05_p_1024x768.jpg"> <!-- random image -->\n' +
    '		        <div class="caption center-align">\n' +
    '		          <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '		        </div>\n' +
    '		      </li>\n' +
    '		    </ul>\n' +
    '		  </div>\n' +
    '\n' +
    '		  <p class=" ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>		  \n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="parallax-container valign-wrapper">\n' +
    '    <div class="section no-pad-bot z1">\n' +
    '      <div class="container">\n' +
    '        <div class="row center">\n' +
    '          <h5 class="header col s12 light">Luxury living, ready for you.</h5>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax z0"><img src="/img/background3.jpg" alt="Unsplashed background img 3"></div>\n' +
    '  </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/activities/activities.page.html',
    '<div id="index-banner" class="parallax-container valign-wrapper">\n' +
    '    <div class="section no-pad-bot valign z1">\n' +
    '      <div class="container">\n' +
    '\n' +
    '        <div class="row center">\n' +
    '          <div class="center">\n' +
    '            <h1 class="center text-lighten-2 white-text">Activities</h1>\n' +
    '            <p>Things to do around Red Beach</p>\n' +
    '            \n' +
    '          </div>\n' +
    '          <!-- <div class="row center">\n' +
    '            <a href="#exec" id="download-button" class="btn-large waves-effect waves-light brand-blue button-home">Executive Suite</a>\n' +
    '            <a href="#deluxe" id="download-button" class="btn-large waves-effect waves-light brand-blue button-home">Deluxe Suite</a>\n' +
    '          </div> -->\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax z0"><img src="http://lvcounseling.com/admin/wp-content/uploads/2013/04/beach-couple.jpg" alt="Unsplashed background img 1"></div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="container">\n' +
    '    <div class="section">\n' +
    '      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias adipisci quod ducimus non consectetur. Ratione deserunt alias dolores? Quibusdam optio, est neque saepe cum repellendus voluptates quos molestiae eligendi inventore?</p>\n' +
    '\n' +
    '      <div class="row">\n' +
    '        <div class="col s12">\n' +
    '          <ul class="tabs">\n' +
    '            <li class="tab col s3"><a class="active" href="#test1">Shaopping</a></li>\n' +
    '            <li class="tab col s3"><a href="#test2">Beaches</a></li>\n' +
    '            <li class="tab col s3"><a href="#test3">Attractions</a></li>\n' +
    '            <li class="tab col s3"><a href="#test4">Misc</a></li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '        <div id="test1" class="col s12">\n' +
    '          <div class="row">\n' +
    '            <div class="col s12 m6">\n' +
    '              <div class="slider margin-top-20">\n' +
    '                <ul class="slides">\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/1"> <!-- random image -->\n' +
    '                    <div class="caption center-align">\n' +
    '                      <h3>This is our big Tagline!</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/2"> <!-- random image -->\n' +
    '                    <div class="caption left-align">\n' +
    '                      <h3>Left Aligned Caption</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/3"> <!-- random image -->\n' +
    '                    <div class="caption right-align">\n' +
    '                      <h3>Right Aligned Caption</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/4"> <!-- random image -->\n' +
    '                    <div class="caption center-align">\n' +
    '                      <h3>This is our big Tagline!</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="col s12 m6">\n' +
    '              <h3>Jenna\'s Jeweler</h3>\n' +
    '              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt excepturi repellendus debitis qui delectus, impedit temporibus atque laudantium earum amet voluptas sunt libero suscipit voluptate cumque iste officiis commodi corporis.</p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <hr>\n' +
    '          <div class="row">\n' +
    '            <div class="col s12 m6">\n' +
    '              <div class="slider margin-top-20">\n' +
    '                <ul class="slides">\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/1"> <!-- random image -->\n' +
    '                    <div class="caption center-align">\n' +
    '                      <h3>This is our big Tagline!</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/2"> <!-- random image -->\n' +
    '                    <div class="caption left-align">\n' +
    '                      <h3>Left Aligned Caption</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/3"> <!-- random image -->\n' +
    '                    <div class="caption right-align">\n' +
    '                      <h3>Right Aligned Caption</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/4"> <!-- random image -->\n' +
    '                    <div class="caption center-align">\n' +
    '                      <h3>This is our big Tagline!</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="col s12 m6">\n' +
    '              <h3>Jenna\'s Jeweler</h3>\n' +
    '              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt excepturi repellendus debitis qui delectus, impedit temporibus atque laudantium earum amet voluptas sunt libero suscipit voluptate cumque iste officiis commodi corporis.</p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <hr>\n' +
    '          <div class="row">\n' +
    '            <div class="col s6 m4">\n' +
    '              <div class="slider margin-top-20">\n' +
    '                <ul class="slides">\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/1"> <!-- random image -->\n' +
    '                    <div class="caption center-align">\n' +
    '                      <h3>This is our big Tagline!</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/2"> <!-- random image -->\n' +
    '                    <div class="caption left-align">\n' +
    '                      <h3>Left Aligned Caption</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/3"> <!-- random image -->\n' +
    '                    <div class="caption right-align">\n' +
    '                      <h3>Right Aligned Caption</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <img src="http://lorempixel.com/580/250/nature/4"> <!-- random image -->\n' +
    '                    <div class="caption center-align">\n' +
    '                      <h3>This is our big Tagline!</h3>\n' +
    '                      <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\n' +
    '                    </div>\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="col s6 m8">\n' +
    '              <h3>Jenna\'s Jeweler</h3>\n' +
    '              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt excepturi repellendus debitis qui delectus, impedit temporibus atque laudantium earum amet voluptas sunt libero suscipit voluptate cumque iste officiis commodi corporis.</p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div id="test2" class="col s12">Test 2</div>\n' +
    '        <div id="test3" class="col s12">Test 3</div>\n' +
    '        <div id="test4" class="col s12">Test 4</div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="col s12 m6 center">\n' +
    '    <div class="some-pannel">\n' +
    '      <div class="map-wrapper">\n' +
    '        <div id="googleMap" style="width:100%;height:100%;">\n' +
    '          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25622.113183988953!2d174.68094955136624!3d-36.60798901925338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d2471b0e383c5%3A0x500ef6143a2fe20!2sRed+Beach!5e0!3m2!1sen!2snz!4v1468540068488" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/admin/admin.page.html',
    '<div class="container">\n' +
    '	<div class="row">\n' +
    '		<div class="col m3">\n' +
    '			<ul>\n' +
    '				<li><b>Edit</b></li>\n' +
    '				<li>Home Page</li>\n' +
    '				<li>Rooms and Rates</li>\n' +
    '				<li>About Page</li>\n' +
    '				<li>Page</li>\n' +
    '				<li>Page</li>\n' +
    '				<li>Page</li>\n' +
    '			</ul>\n' +
    '		</div>\n' +
    '		<div class="col m9">body</div>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/book/book.page.html',
    '<div>\n' +
    '    <h2>Book your room</h2>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/contact/contact.page.html',
    '<div id="index-banner" class="parallax-container valign-wrapper">\n' +
    '    <div class="section no-pad-bot valign z1">\n' +
    '      <div class="container">\n' +
    '\n' +
    '        <div class="row center">\n' +
    '          <div class="center">\n' +
    '            <h1 class="center text-lighten-2 white-text">Get in touch</h1>\n' +
    '            \n' +
    '          </div>\n' +
    '          <!-- <div class="row center">\n' +
    '            <a href="#exec" id="download-button" class="btn-large waves-effect waves-light brand-blue button-home">Executive Suite</a>\n' +
    '            <a href="#deluxe" id="download-button" class="btn-large waves-effect waves-light brand-blue button-home">Deluxe Suite</a>\n' +
    '          </div> -->\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax z0"><img src="http://lvcounseling.com/admin/wp-content/uploads/2013/04/beach-couple.jpg" alt="Unsplashed background img 1"></div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="container">\n' +
    '    <div class="section">\n' +
    '\n' +
    '      <div class="row">\n' +
    '        <div class="col s12 m6 pad-left-0">\n' +
    '          <h2 class="flow-text valign"> Contact Form</h2>\n' +
    '          <div class="input-field col s12">\n' +
    '            <input id="first_name" type="text" class="validate">\n' +
    '            <label for="first_name">First Name</label>\n' +
    '          </div>\n' +
    '          <div class="input-field col s12">\n' +
    '            <input id="last_name" type="text" class="validate">\n' +
    '            <label for="last_name">Last Name</label>\n' +
    '          </div>\n' +
    '          <div class="input-field col s12">\n' +
    '            <input id="first_name" type="text" class="validate">\n' +
    '            <label for="first_name">Phone Number</label>\n' +
    '          </div>\n' +
    '          <div class="input-field col s12">\n' +
    '            <input id="last_name" type="text" class="validate">\n' +
    '            <label for="last_name">Email</label>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col s12 m6 pad-left-0">\n' +
    '          <div class="input-field col s12 contact-box">\n' +
    '            <textarea  id="textarea1" class="materialize-textarea"></textarea>\n' +
    '          <form action="#">\n' +
    '            <p class="range-field">\n' +
    '              <label for="test5">Priority</label>\n' +
    '              <input type="range" id="test5" min="0" max="10" />\n' +
    '              \n' +
    '            </p>\n' +
    '          </form>\n' +
    '            <label for="textarea1">Message</label>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col s12">\n' +
    '        </div>\n' +
    '        <button class="btn waves-effect waves-light right contact-submit" type="submit" name="action">Submit\n' +
    '          <i class="material-icons right">send</i>\n' +
    '        </button>\n' +
    '      </div>\n' +
    '      <div class="divider"></div>\n' +
    '      <div class="row" id="">\n' +
    '          <h4 class="flow-text valign">Other</h4>\n' +
    '        <div class="input-field col s12 m12">\n' +
    '          <div class="col s6 m10">\n' +
    '            <ul class="footer-contact">\n' +
    '              <li class="valign-wrapper ">\n' +
    '                <img src="assets/img/tel.png" class="valign" alt="">\n' +
    '                <p  class="valign">+64 021 090 910</p></li>\n' +
    '              <li class="valign-wrapper ">\n' +
    '                <img src="assets/img/at.png" alt="">\n' +
    '                <span>lindsay@watkins.com</span></li>\n' +
    '              <li class="valign-wrapper ">\n' +
    '                <img src="assets/img/loc.png" alt=""> \n' +
    '                <p>26 Fake St Hamilton <br> New Zealand</p></li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '          <div class="col s6 m2">\n' +
    '            <ul class="footer-contact right">\n' +
    '              <li class="valign-wrapper margin-top-5">\n' +
    '                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" class="valign" alt="">\n' +
    '              <li class="valign-wrapper margin-top-5">\n' +
    '                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-512.png" alt="">\n' +
    '              <li class="valign-wrapper margin-top-5">\n' +
    '                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-tumblr-512.png" alt=""> \n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="col s12 m6 center">\n' +
    '    <div class="some-pannel">\n' +
    '      <div class="map-wrapper">\n' +
    '        <div id="googleMap" style="width:100%;height:100%;">\n' +
    '          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25622.113183988953!2d174.68094955136624!3d-36.60798901925338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d2471b0e383c5%3A0x500ef6143a2fe20!2sRed+Beach!5e0!3m2!1sen!2snz!4v1468540068488" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/footer/footer.page.html',
    '<md-content class="Page-Container Footer iOS-hack" layout-align="center center">\n' +
    '<md-icon md-svg-src="/img/icons/logo-grey.svg" class="Footer-logo"></md-icon>\n' +
    '<br/>\n' +
    '<br/>\n' +
    '<div class="Footer-text">\n' +
    '	A Booking application by <a href="https://github.com/jadjoubran" class="Footer-link" target="_blank">Chace Kim</a>.\n' +
    '	Design by <a href="http://nicolesaidy.com" class="Footer-link" target="_blank">Tayla Coman</a>\n' +
    '</div>\n' +
    '<div class="Footer-text">\n' +
    '	&copy; 2016 Developer Squared Limited\n' +
    '</div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/forgot-password/forgot-password.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="ForgotPassword-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Forgot your password?</h1>\n' +
    '\n' +
    '        <forgot-password></forgot-password>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/header/header.page.html',
    '<div class="navbar-fixed">\n' +
    '	<nav class="white" role="navigation">\n' +
    '		<div class="nav-wrapper container">\n' +
    '			<a id="logo-container" ui-sref="app.landing" class="brand-logo"><img src="https://seaturtles.org/wp-content/uploads/2014/01/turtle-icon-new.png" alt="" ></a>\n' +
    '			<ul class="right hide-on-med-and-down">\n' +
    '				<li><a href="#">Book Now</a></li>\n' +
    '				<li><a ui-sref="app.rooms">Roaoms &amp; Rates</a></li>\n' +
    '				<li><a ui-sref="app.about">About us</a></li>\n' +
    '				<li><a ui-sref="app.activities">Activities</a></li>\n' +
    '				<li><a ui-sref="app.contact">Contact</a></li>\n' +
    '			</ul>\n' +
    '\n' +
    '			<ul id="nav-mobile" class="side-nav">\n' +
    '				<li><a href="#">Book Now</a></li>\n' +
    '				<li><a ui-sref="rooms">Roaoms &amp; Rates</a></li>\n' +
    '				<li><a ui-sref="about">About us</a></li>\n' +
    '				<li><a href="#">Activities</a></li>\n' +
    '				<li><a href="contact">Contact</a></li>\n' +
    '			</ul>\n' +
    '			<a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>\n' +
    '		</div>\n' +
    '	</nav>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<!--<div layout="row">\n' +
    '		<div flex="90" flex-offset="5" class="DemoHeader-container">\n' +
    '			<div layout="row" layout-align="space-between">\n' +
    '				<img src="img/icons/logo.svg" ui-sref="app.landing" class="DemoHeader-logo"/>\n' +
    '				<div layout="row" layout-align="center stretch">\n' +
    '					<a hide-xs class="DemoHeader-link md-subhead" ui-sref="app.landing">Home</a>\n' +
    '					<a hide-xs class="DemoHeader-link md-subhead" ui-sref="app.book">Book</a>\n' +
    '					<a hide-xs class="DemoHeader-link md-subhead" ui-sref="app.about">About</a>\n' +
    '					<a hide-xs class="DemoHeader-link md-subhead" ui-sref="app.login">Login</a>\n' +
    '					<a hide-xs class="DemoHeader-link md-subhead" ui-sref="app.register">Register</a>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>-->');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/landing/landing.page.html',
    '<div id="index-banner" class="parallax-container">\n' +
    '    <div class="section no-pad-bot z1">\n' +
    '      <div class="container">\n' +
    '        <br><br>\n' +
    '        <h1 class="header center teal-text text-lighten-2">&nbsp;</h1>\n' +
    '        <div class="row center">\n' +
    '          <div class="input-field col s5">\n' +
    '            <label for="check_in" class="checkin-label">Check In</label>\n' +
    '          </div>\n' +
    '          <div class="input-field col s5">  \n' +
    '           <label for="check_out" class="checkin-label">Check Out</label>\n' +
    '          </div>\n' +
    '          <div class="input-field col s2">  \n' +
    '           <label for="people" class="checkin-label"># People</label>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="row center">\n' +
    '          <div class="input-field col s5">\n' +
    '            <input placeholder="Click to choose" type="date" class="datepicker">\n' +
    '          </div>\n' +
    '          <div class="input-field col s5">\n' +
    '            <input placeholder="Click to choose" type="date" class="datepicker">\n' +
    '          </div>\n' +
    '          <div class="input-field col s2">\n' +
    '            <select>\n' +
    '              <option value="1" selected>1</option>\n' +
    '              <option value="2">2</option>\n' +
    '              <option value="3">3</option>\n' +
    '            </select>\n' +
    '          </div>\n' +
    '        <!--<h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5> -->\n' +
    '        </div>\n' +
    '        <div class="row center">\n' +
    '          <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1 button-home">Book</a>\n' +
    '        </div>\n' +
    '        <br><br>\n' +
    '\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax z0"><img src="http://api.ning.com/files/qSAS7eZtx6D17xN7buDpPsJAZ0IbKQ9luk08HJsYn1j8rtXOrq7YTWlnlOWcCfwMn369Ag-jN6C6TB4WgQvP0MhpXjtZI8TT/3d_lux~uxury_homes_las_vegas.jpg" alt="Unsplashed background img 1"></div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="container">\n' +
    '    <div class="section">\n' +
    '      <div class="row center valign-wrapper" id="block">\n' +
    '        <div class="col s12 m4 l2 valign-wrapper home-email-wrapper valign">\n' +
    '          <h4 class="flow-text valign">Discounts and Exclusive Offers</h4>\n' +
    '        </div>\n' +
    '        <div class="input-field col s12 m5 l7 valign-wrapper home-email-wrapper valign">\n' +
    '          <input id="email" type="email" placeholder="Email" class="validate valign">\n' +
    '        </div>\n' +
    '        <div class="input-field col s12 m3 l3 valign-wrapper home-email-wrapper valign">\n' +
    '          <button class="btn waves-effect waves-light button-home" id="home-email-button" type="submit" name="action">Submit\n' +
    '            <i class="material-icons right">send</i>\n' +
    '          </button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="parallax-container valign-wrapper">\n' +
    '    <div class="row no-pad-bot z1">\n' +
    '      <div class="container">\n' +
    '        <div class="row">\n' +
    '          <div class="col s12 m4 fire-1">\n' +
    '            <div class="icon-block">\n' +
    '              <div class="center">\n' +
    '                <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>\n' +
    '                \n' +
    '                <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1 button-home">About us</a>\n' +
    '                <p class="flow-text home-line-height">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia laboriosam aut adipisci amet doloribus ipsa quia inventore illo, consequuntur debitis error sunt sequi ducimus consequatur fuga nobis facere odio.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="col s12 m4 fire-2">\n' +
    '            <div class="icon-block">\n' +
    '              <h2 class="center brown-text"><i class="material-icons">group</i></h2>\n' +
    '\n' +
    '              <div class="center">\n' +
    '                <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1 button-home">Gallery</a>\n' +
    '                <p class="flow-text home-line-height">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia laboriosam aut adipisci amet doloribus ipsa quia inventore illo, consequuntur debitis error sunt sequi ducimus consequatur fuga nobis facere odio.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="col s12 m4 fire-3">\n' +
    '            <div class="icon-block">\n' +
    '              <h2 class="center brown-text"><i class="material-icons">settings</i></h2>\n' +
    '\n' +
    '              <div class="center">\n' +
    '                <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1 button-home">Rooms &amp; Rates</a>\n' +
    '                <p class="flow-text home-line-height">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officia laboriosam aut adipisci amet doloribus ipsa quia inventore illo, consequuntur debitis error sunt sequi ducimus consequatur fuga nobis facere odio.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax z0"><img src="http://www.funchap.com/wp-content/uploads/2015/08/nice-caribbean-beach-wallpaper-2015.jpg" alt="Unsplashed background img 2"></div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="container">\n' +
    '    <div class="section">\n' +
    '      <div class="row valign-wrapper z1" id="block">\n' +
    '        <div class="col s12 m6 center valign">\n' +
    '          <h3>Testimonials</h3>\n' +
    '          <div class="my-slider">\n' +
    '            <ul>\n' +
    '              <li>\n' +
    '                <p>12121212Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore repudiandae fugit maiores rem ad molestiae architecto aspernatur voluptatibus, ducimus, eius distinctio saepe quam eum fugiat earum debitis. Repellat, sed.</p>\n' +
    '              </li>\n' +
    '              <li>\n' +
    '                <p>1313131313Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore repudiandae fugit maiores rem ad molestiae architecto aspernatur voluptatibus, ducimus, eius distinctio saepe quam eum fugiat earum debitis. Repellat, sed.</p>\n' +
    '              </li>\n' +
    '              <li>\n' +
    '                <p>141414141414Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore repudiandae fugit maiores rem ad molestiae architecto aspernatur voluptatibus, ducimus, eius distinctio saepe quam eum fugiat earum debitis. Repellat, sed.</p>\n' +
    '              </li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col s12 m6 center">\n' +
    '          <div class="some-pannel">\n' +
    '            <div class="map-wrapper">\n' +
    '              <div id="googleMap" style="width:100%;height:100%;">\n' +
    '                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25622.113183988953!2d174.68094955136624!3d-36.60798901925338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d2471b0e383c5%3A0x500ef6143a2fe20!2sRed+Beach!5e0!3m2!1sen!2snz!4v1468540068488" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="parallax-container valign-wrapper">\n' +
    '    <div class="section no-pad-bot z1">\n' +
    '      <div class="container">\n' +
    '        <div class="row center">\n' +
    '          <h5 class="header col s12 light">Luxury living, ready for you.</h5>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax z0"><img src="/img/background3.jpg" alt="Unsplashed background img 3"></div>\n' +
    '  </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/login/login.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="Login-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Log in to your account</h1>\n' +
    '\n' +
    '        <login-form></login-form>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/register/register.page.html',
    '<md-content class="Page-container">\n' +
    '	<div flex="80" flex-offset="10">\n' +
    '		<div class="Register-formContainer" layout="column" layout-align="center center">\n' +
    '			<h1 class="md-headline">Create an account</h1>\n' +
    '\n' +
    '			<register-form></register-form>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/reset-password/reset-password.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="ResetPassword-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Reset Password</h1>\n' +
    '\n' +
    '        <reset-password></reset-password>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/rooms/rooms.page.html',
    '<div id="index-banner" class="parallax-container valign-wrapper">\n' +
    '    <div class="section no-pad-bot valign z1">\n' +
    '      <div class="container">\n' +
    '\n' +
    '        <div class="row center">\n' +
    '          <div class="center">\n' +
    '            <h2 class="center text-lighten-2 white-text">2 Luxury Rooms, infinite possiblites</h2>\n' +
    '            \n' +
    '          </div>\n' +
    '          <div class="row center">\n' +
    '            <a href="#exec" id="download-button" class="btn-large waves-effect waves-light brand-blue button-home">Executive Suite</a>\n' +
    '            <a href="#deluxe" id="download-button" class="btn-large waves-effect waves-light brand-blue button-home">Deluxe Suite</a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax z0"><img src="/img/parallax1.jpg" alt="Unsplashed background img 1"></div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="container">\n' +
    '    <div class="section" id="exec">\n' +
    '      <div class="row center" id="block">\n' +
    '        <div class="col l4 m12 s12" style="min-height: 100px">\n' +
    '          <a class="waves-effect waves-light btn hide-on-med-and-up brand-blue" href="#list">Features</a>\n' +
    '          <a class="waves-effect waves-light btn hide-on-med-and-up brand-blue" href="#gallery">Gallery</a>\n' +
    '          <h3>Executive Suite</h3>\n' +
    '          <p>Relax in style as this room looks out onto ocean and island views, as far as the eye can see.</p>\n' +
    '          <p>Imagine the peaceful surroundings with just a hint of the ocean breaking on the beach, the native Tuis in the palms below.</p>\n' +
    '          <p>This room is decorated with modern facilities, is light and bright but generates  a warmth which evokes romance and relaxation.</p>\n' +
    '          <p>We also offer a courtesy pick up and drop off to local restaurants.</p>\n' +
    '          <p><b>Use of:</b></p>\n' +
    '          <div class="chip">Guest Laundry</div>\n' +
    '          <div class="chip">Swimming Pool</div>\n' +
    '          <div class="chip">Indoor Spa Pool</div>\n' +
    '          <div class="chip">Swedish Sauna</div>\n' +
    '          <div class="chip">Mini Gym</div>\n' +
    '          \n' +
    '        </div>\n' +
    '        <div class="col l4 m6 s12">\n' +
    '          <ul class="collection margin-top-21" id="list">\n' +
    '            <li class="collection-item brand-blue ">Room Features</li>\n' +
    '            <li class="collection-item">Super King Euro Flex bed with electric individual mattress controls</li>\n' +
    '            <li class="collection-item">Full cooked and /or Continental Breakfast</li>\n' +
    '            <li class="collection-item">Kitchenette with Fridge</li>\n' +
    '            <li class="collection-item">Nespresso Coffee Machine,  Tea Coffee, milk of choice</li>\n' +
    '            <li class="collection-item">Large walk in wardrobe/ dressing room</li>\n' +
    '            <li class="collection-item">Large Ensuite with Double person Shower and separate bath</li>\n' +
    '            <li class="collection-item">Hair Dryer</li>\n' +
    '            <li class="collection-item ">Shampoo, conditioner, body wash, soap</li>\n' +
    '            <li class="collection-item ">Robes</li>\n' +
    '            <li class="collection-item  none hidden-show">TV</li>\n' +
    '            <li class="collection-item none hidden-show">Wireless Internet</li>\n' +
    '            <li class="collection-item none hidden-show">Guest Lounge also with TV</li>\n' +
    '            <li class="collection-item none hidden-show">Beach Towels</li>\n' +
    '            <li class="collection-item none hidden-show">Balcony</li>\n' +
    '            <li class="collection-item none hidden-show">Complimentary bottle of wine on first night</li>\n' +
    '            <li class="collection-item none hidden-show">Elevator and or stairs</li>\n' +
    '\n' +
    '\n' +
    '          </ul>\n' +
    '          <a class="btn-floating btn-large waves-effect waves-light brand-orange "><i class="material-icons" id="more-list">add</i></a>\n' +
    '        </div>\n' +
    '        <div class="col l4 m6 s12" id="gallery">\n' +
    '          <ul class="collection margin-top-21" id="list">\n' +
    '            <li class="collection-item brand-blue ">Tariff</li>\n' +
    '            <li class="collection-item   ">Single $250.00 per night </li>\n' +
    '            <li class="collection-item   ">Double $350.00 per night </li>\n' +
    '            <li class="collection-item   "><a class="waves-effect waves-light btn modal-trigger grey lighten-1" href="#modal1">Terms &amp; Discounts</a></li>\n' +
    '          </ul>\n' +
    '          <div id="modal1" class="modal">\n' +
    '            <div class="modal-content">\n' +
    '              <h4>Terms</h4>\n' +
    '              <ul class="collection margin-top-21" id="list">\n' +
    '                <li class="collection-item">Prices in NZ $ includes all taxes</li>\n' +
    '                <li class="collection-item">Eftpos, Visa, Mastercard accepted</li>\n' +
    '                <li class="collection-item">Prices and conditions may be subject to change</li>\n' +
    '                <li class="collection-item">Check in 3pm check out 11 am:\n' +
    '                  If you wish to arrive earlier or depart <br> later than the time stated, please contact us in advance.\n' +
    '<br>If you have any special food requirements, please also let us know in advance.</li>\n' +
    '              </ul>\n' +
    '              <h4>Discounts</h4>\n' +
    '              <ul class="collection margin-top-21" id="list">\n' +
    '                <li class="collection-item">Stay 3 nights or more and reduce your rate by $50 a night per couple</li>\n' +
    '                <li class="collection-item">Stay 6 nights and pay for only 5 nights per couple</li>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '              <a class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div id=\'ninja-slider\' class="">\n' +
    '            <div class="">\n' +
    '              <div class="slider-inner">\n' +
    '                <ul>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                </ul>\n' +
    '                <div class="fs-icon" title="Expand/Close"></div>\n' +
    '              </div>\n' +
    '              <div id="thumbnail-slider">\n' +
    '                <div class="inner">\n' +
    '                  <ul>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>0</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>1</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>2</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>3</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>4</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>5</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>6</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>7</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>8</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>9</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>10</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>11</span>\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <a href="#exec" id="download-button" class="btn-large waves-effect waves-light brand-orange button-home"> Book Now</a>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="parallax-container valign-wrapper">\n' +
    '    <div class="row no-pad-bot z1">\n' +
    '      <div class="container">\n' +
    '        <div class="row">\n' +
    '          <div class="col s12 m12">\n' +
    '            <div class="my-slider">\n' +
    '              <h3 class="center">Testimonials</h3>\n' +
    '              <ul class="home-line-height">\n' +
    '                <li>\n' +
    '                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore repudiandae fugit maiores rem ad molestiae architecto aspernatur voluptatibus, ducimus, eius distinctio saepe quam eum fugiat earum debitis. Repellat, sed.</p>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore repudiandae fugit maiores rem ad molestiae architecto aspernatur voluptatibus, ducimus, eius distinctio saepe quam eum fugiat earum debitis. Repellat, sed.</p>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore repudiandae fugit maiores rem ad molestiae architecto aspernatur voluptatibus, ducimus, eius distinctio saepe quam eum fugiat earum debitis. Repellat, sed.</p>\n' +
    '                </li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax z0"><img src="http://www.sofitel-legend.com/hanoi/en/rooms-suites/Hotel%20Metropole%20Hanoi%20-%20%20Luxury%20room.jpg" alt="Unsplashed background img 2"></div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="container">\n' +
    '    <div class="section" id="deluxe">\n' +
    '      <div class="row center" id="block">\n' +
    '        <div class="col l4 m12 s12" style="min-height: 100px">\n' +
    '          <a class="waves-effect waves-light btn hide-on-med-and-up" href="#list2">Features</a>\n' +
    '          <a class="waves-effect waves-light btn hide-on-med-and-up" href="#gallery2">Gallery</a>\n' +
    '          <h3>Deluxe Suite</h3>\n' +
    '          <p>This room is slightly smaller than the Executive but just as delightful with excellent sea views.</p>\n' +
    '          <p>Decorated tastefully with relaxation in mind a great place to sit back and chill out in style.</p>\n' +
    '          <p>Includes: courtesy pick up and drop off to local restaurants.</p>\n' +
    '          <p><b>Use of:</b></p>\n' +
    '          <div class="chip">Guest Laundry</div>\n' +
    '          <div class="chip">Swimming Pool</div>\n' +
    '          <div class="chip">Indoor Spa Pool</div>\n' +
    '          <div class="chip">Swedish Sauna</div>\n' +
    '          <div class="chip">Mini Gym</div>\n' +
    '        </div>\n' +
    '        <div class="col l4 m6 s12">\n' +
    '          <ul class="collection margin-top-21" id="list2">\n' +
    '            <li class="collection-item brand-blue">Room Features</li>\n' +
    '            <li class="collection-item">Full cooked and /or Continental Breakfast</li>\n' +
    '            <li class="collection-item">Super King size bed</li>\n' +
    '            <li class="collection-item">Kitchenette with Microwave and Fridge</li>\n' +
    '            <li class="collection-item">Tea/Coffee Milk of choice</li>\n' +
    '            <li class="collection-item">Ensuite with Large shower and separate bath</li>\n' +
    '            <li class="collection-item">Hair Dryer</li>\n' +
    '            <li class="collection-item">Shampoo, conditioner, body wash, soap</li>\n' +
    '            <li class="collection-item none hidden-show2">Robes</li>\n' +
    '            <li class="collection-item none hidden-show2">TV</li>\n' +
    '            <li class="collection-item none hidden-show2">Wireless Internet</li>\n' +
    '            <li class="collection-item none hidden-show2">Guest Lounge also with TV</li>\n' +
    '            <li class="collection-item none hidden-show2">Beach Towels</li>\n' +
    '            <li class="collection-item none hidden-show2">Balcony</li>\n' +
    '            <li class="collection-item none hidden-show2">Elevator and or stairs</li>\n' +
    '\n' +
    '\n' +
    '          </ul>\n' +
    '          <a class="btn-floating btn-large waves-effect waves-light brand-orange"><i class="material-icons" id="more-list2">add</i></a>\n' +
    '        </div>\n' +
    '        <div class="col l4 m6 s12" id="gallery2">\n' +
    '          <ul class="collection margin-top-21" id="list">\n' +
    '            <li class="collection-item brand-blue ">Tariff</li>\n' +
    '            <li class="collection-item   ">Single $200.00 per night </li>\n' +
    '            <li class="collection-item   ">Double $300.00 per night </li>\n' +
    '            <li class="collection-item   "><a class="waves-effect waves-light btn modal-trigger grey lighten-1" href="#modal1">Terms &amp; Discounts</a></li>\n' +
    '          </ul>\n' +
    '          <div id=\'ninja-slider2\' class="">\n' +
    '            <div class="">\n' +
    '              <div class="slider-inner">\n' +
    '                <ul>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                  <li><a class="ns-img" href="http://baconmockup.com/300/200"></a></li>\n' +
    '                </ul>\n' +
    '                <div class="fs-icon" title="Expand/Close"></div>\n' +
    '              </div>\n' +
    '              <div id="thumbnail-slider2">\n' +
    '                <div class="inner">\n' +
    '                  <ul>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>0</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>1</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>2</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>3</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>4</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>5</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>6</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>7</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>8</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>9</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>10</span>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                      <a class="thumb" href="http://baconmockup.com/300/200"></a>\n' +
    '                      <span>11</span>\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <a href="#exec" id="download-button" class="btn-large waves-effect waves-light brand-orange button-home"> Book Now</a>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '  <div class="parallax-container valign-wrapper">\n' +
    '    <div class="section no-pad-bot">\n' +
    '      <div class="container">\n' +
    '        <div class="row center">\n' +
    '          <h5 class="header col s12 light">Luxury living, ready for you.</h5>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="parallax"><img src="/img/background3.jpg" alt="Unsplashed background img 3"></div>\n' +
    '  </div>\n' +
    '\n' +
    '  <script type="text/javascript">\n' +
    '    $window.document.title = "eeee";\n' +
    '  </script>');
}]);
})();
