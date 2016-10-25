module app.exception;

import app.base;
import app.helper.helper;
public import app.common.errorCode;

import std.net.curl : CurlException;
import std.experimental.logger;
import std.json : JSONException;

alias IllegalUserNameException = IllegalNickNameException;

class DBServerErroCodeException  : Exception
{
	this(uint erro,string msg, string file = __FILE__, size_t line = __LINE__,
		Throwable next = null) @nogc @safe pure nothrow
	{
		errocode = erro;
		super(msg, file, line, next);
	}

	uint errocode;
}

pragma(inline, true)
void throwExceptionBuild(string name = "", string file = __FILE__, size_t line = __LINE__ )(string msg = "")
{
	mixin("throw new " ~ name ~ "Exception(msg,\"" ~ file ~ "\"," ~ line.stringof ~ ");");
}

pragma(inline, true)
void throwExceptionBuild(string file = __FILE__, size_t line = __LINE__ )(uint errocode,string msg = "")
{
	throw new DBServerErroCodeException(errocode, msg,file,line);
}

void runCatchException(BaseController controller, void delegate() fun)
{
	void sendErro(EXCEP)(EXCEP excep,int errocode)
	{
		warning(excep.toString());
		controller.errorJson(controller.res,errocode,controller.req.path);

		// NOTES: FREE the Exception
		import core.memory;
		excep.destroy;
		GC.free(cast(void *)excep);
	}

	try{
		fun();
	} catch(HandleFailedException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.HandleFailed);
	} catch(ArgumentException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.Argument);
	} catch(LoginErrorFiveTimesException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.LoginErrorFiveTimes);
	} catch(WrongNumberException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.WrongNumber);
	} catch(NotExistUserException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.NotExistUser);
	} catch(CurlException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.HandleFailed);
	} catch (PasswdNotSameException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.PasswdNotSame);
	} catch (JSONException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.HandleFailed);
	} catch (IllegalUserNameException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.IllegalNickName);
	} catch (AppidErrorException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.AppidError);
	} catch (ExistUserException e){
		sendErro(e,ErrorCodeHelper.ErrorCode.ExistUser);
	}  catch (DBServerErroCodeException e){
		sendErro(e,e.errocode);
	} 

	catch(Exception e){
		sendErro(e,ErrorCodeHelper.ErrorCode.Argument);
	} 

}



