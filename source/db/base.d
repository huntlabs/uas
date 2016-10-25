module kerisy.db.base;

import kerisy.db;

/**
 * cache interface with inet of libasync 
 */
interface Base
{
	/**
	* set data with key, make it expire after expires secconds
	* if expires == 0 - data will not expire
	* 
	*/
	RETURN_STATE set(T)(string key, T data, int expires = 0);

	/**
	*  get back data
	*  return it as type T
	*  
	* if the key is not found, it will return an empty string
	*/
	T get(T)(string key);

	/**
	* del data 
	* return it as type T,
	* 
	* 
	*/ 
	RETURN_STATE del(string key);

	/**
	*	hashset data
	*   return Status
	*  
	*/
	RETURN_STATE hset(T)(string key, T hashKey, T Value);

	/**
	*	hashget data
	*   return it as type T
	*  
	*/
	T hget(T)(string key, T hashKey);

	/**
	*	hashgets data
	*   return it as type T
	*  
	*/
	string[string] hgetall(string key);

	/**
	*	hashlen data
	*   return it as type T
	*  
	*/
	size_t hlen(string key);

	/**
	*	hashkeys data
	*   return it as type T[]
	*  
	*/
	T[] hkeys(T)(string key);

	/**
	*	hashdel data
	*   return Status
	*  
	*/
	RETURN_STATE hdel(T)(string key, T hashKey);

	/**
	*	hincr
	*   return Status
	*  
	*/
	int hincr(T)(string key, T hashKey, int _default = 1);

	/**
	*	hdecr
	*   return Status
	*  
	*/
	int hdecr(T)(string key, T hashKey, int _default = 1);

	/**
	*	incr
	*   return Status
	*  
	*/
	int incr(T)(string key, int _default = 1);

	/**
	*	hdecr
	*   return Status
	*  
	*/
	int decr(T)(string key, int _default = 1);

	/**
	*  ping the nosql
	*  return RETURN_STATE
	*  
	*  check the connection is actived
	*/
	RETURN_STATE ping();

	/**
	*  qpush_back
	*  return value
	*/
	RETURN_STATE pushBack(N, M)(N key, M data);

	/**
	*  qpop_back
	*  return value
	*/
	M popBack(N, M)(N key);

	/**
	*  qpush_front
	*  return value
	*/
	RETURN_STATE pushFront(N, M)(N key, M data);

	/**
	*  qpop_front
	*  return value
	*/
	M popFront(N, M)(N key);

	/**
	*  qclear
	*  return value
	*/
	RETURN_STATE clear(N)(N key);

	/**
	*  slice
	*  return value
	*/
	string[] slice(N)(N key, int start, int end);

	/**
	*  size
	*  return value
	*/
	int size(N)(N key);

}
