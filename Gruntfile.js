module.exports = function(grunt){
	grunt.initConfig({
		bower : {
			install : {
				options: {
                    targetDir: "vendor", layout: "byComponent", cleanTargetDir: false
                }
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-bower-task");
	grunt.registerTask("install-bower-packages", ["bower:install"]);
}