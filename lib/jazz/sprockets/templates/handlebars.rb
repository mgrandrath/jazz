require 'tilt'

class Handlebars < Tilt::Template
  
  JS_ESCAPE_MAP = {
      "\r\n"  => '\n',
      "\n"    => '\n',
      "\r"    => '\n',
      '"'     => '\\"',
      "'"     => "\\'"
  }
  
  def self.default_mime_type
    'application/javascript'
  end

  def prepare
  end

  def evaluate(scope, locals, &block)
    name = scope.logical_path.inspect.gsub('app/views/', '').gsub(/[\/]/, '_')
    content = indent(data).strip.gsub(/(\r\n|[\n\r"'])/) { JS_ESCAPE_MAP[$1] }		
		"Jazz.View.add(#{name}, \"#{content}\")"
  end

  private
    def indent(string)
      string.gsub(/$(.)/m, "\\1  ").strip
    end
end