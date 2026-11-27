require 'html-proofer'

# rake test
desc 'build docs and test generated site'
task :test do
  sh 'bundle exec jekyll clean'
  sh 'bundle exec jekyll build -d ./_site/docs'
  HTMLProofer.check_directory('./_site', {
    # https://github.com/gjtorikian/html-proofer#configuration

    # Enables HTML validation errors from Nokogiri
    :check_html => true,

    # Files that are safe to ignore
    :file_ignore => [/.*pdf.html/],

    # Ignore empty `alt` tags
    :empty_alt_ignore => true,

    # Ignore github links since HTMLProofer does not have access to the private repos
    :url_ignore => [/github.com\/.*/],
  }).run
end
