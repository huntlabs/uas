import hunt;

import std.stdio;
import std.path;

import app.config;

void main()
{
	setLog(loglevel, buildPath(huntConfigPath,logfile));
	auto app = Application.getInstance();
	app.run();
}

///设置日志等级, 默认不显示日志
void setLog(string loglevel = "all", string logfile = "")
{

	loglevel = loglevel.length == 0 ? "off" : loglevel;

	switch(loglevel)
	{
		case "all":
			globalLogLevel = LogLevel.all;
			break;
		case "critical":
			globalLogLevel = LogLevel.critical;
			break;
		case "error":
			globalLogLevel = LogLevel.error;
			break;
		case "fatal":
			globalLogLevel = LogLevel.fatal;
			break;
		case "info":
			globalLogLevel = LogLevel.info;
			break;
		case "trace":
			globalLogLevel = LogLevel.trace;
			break;
		case "warning":
			globalLogLevel = LogLevel.warning;
			break;
		case "off":
		default:
			globalLogLevel = LogLevel.off;
			break;

	}

	touch(logfile);
	sharedLog = new FileLogger(logfile);
}

void touch(string file = "")
{
	writeln(file);
	import std.file;
	if(!file.length)
	{
		return;
	}

	auto info = split(file,"/");	
	writeln(info);
	if(info.length > 1)
	{
		string path = join(info[0 .. $-1],"/");
		writeln(path);
		mkdirRecurse(path);
	}
	write(file,"");
}

