var searchIndex = JSON.parse('{\
"log_server":{"doc":"","t":[0,5,5,3,11,11,11,11,11,11,5,12,11,12,12,11,5,12,5,11,11,11,11],"n":["config","handle_connection","main","Config","borrow","borrow_mut","default","eq","fmt","from","get_config_path","host","into","log_dir","logging","ne","parse_config","port","read_config","try_from","try_into","type_id","vzip"],"q":["log_server","","","log_server::config","","","","","","","","","","","","","","","","","","",""],"d":["","Receives data from a TCP Stream. Logs data to a file.","Binds to port, forks on connections.","Contains the configuration.","","","Returns the default configuration.","","","Returns the argument unchanged.","Returns a string containing the path to the config file.","The host the log server is running on. Defaults to …","Calls <code>U::from(self)</code>.","Directory to store log files. Defaults to <code>./log</code>","Whether to log events. Defaults to <code>true</code>","","Parses a config file string and returns a <code>Config</code> struct.","The port that the log server listens on. Defaults to <code>40000</code>.","Returns the current configuration.","","","",""],"i":[0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1],"f":[null,[[["tcpstream",3],["config",3]]],[[]],null,[[["",0]],["",0]],[[["",0]],["",0]],[[],["config",3]],[[["config",3],["config",3]],["bool",0]],[[["config",3],["formatter",3]],["result",6]],[[]],[[],["string",3]],null,[[]],null,null,[[["config",3],["config",3]],["bool",0]],[[["string",3]],["config",3]],null,[[],["config",3]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[]]],"p":[[3,"Config"]]},\
"no_flag_4_u":{"doc":"","t":[0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"n":["preload_hooks","gets","heap","printf","puts","read","scanf","write","fgets","gets","free","dprintf","fprintf","printf","snprintf","sprintf","vdprintf","vfprintf","vprintf","vsnprintf","vsprintf","fputs","puts","fread","read","fwrite","write"],"q":["no_flag_4_u","no_flag_4_u::preload_hooks","","","","","","","no_flag_4_u::preload_hooks::gets","","no_flag_4_u::preload_hooks::heap","no_flag_4_u::preload_hooks::printf","","","","","","","","","","no_flag_4_u::preload_hooks::puts","","no_flag_4_u::preload_hooks::read","","no_flag_4_u::preload_hooks::write",""],"d":["","","","","","","","","Hooks <code>fgets</code>.","Hooks <code>gets</code>.","Hooks <code>free</code>.","Hooks <code>dprintf</code>.","Hooks <code>printf</code>.","Hooks <code>printf</code>.","Hooks <code>snprintf</code>.","Hooks <code>sprintf</code>.","Hooks <code>vdprintf</code>.","Hooks <code>vfprintf</code>.","Hooks <code>vprintf</code>.","Hooks <code>vsnprintf</code>.","Hooks <code>vsprintf</code>.","Hooks <code>fputs</code>.","Hooks <code>puts</code>.","Hooks <code>fread</code>.","Hooks <code>read</code>.","Hooks <code>fwrite</code>.","Hooks <code>write</code>."],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"f":[null,null,null,null,null,null,null,null,[[["c_int",6]]],[[]],[[]],[[["c_int",6]],["c_int",6]],[[],["c_int",6]],[[],["c_int",6]],[[["size_t",6]],["c_int",6]],[[],["c_int",6]],[[["c_int",6],["valist",3]],["c_int",6]],[[["valist",3]],["c_int",6]],[[["valist",3]],["c_int",6]],[[["size_t",6],["valist",3]],["c_int",6]],[[["valist",3]],["c_int",6]],[[],["c_int",6]],[[],["c_int",6]],[[["size_t",6],["size_t",6]],["size_t",6]],[[["c_int",6],["size_t",6]],["ssize_t",6]],[[["size_t",6],["size_t",6]],["size_t",6]],[[["c_int",6],["size_t",6]],["ssize_t",6]]],"p":[]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};