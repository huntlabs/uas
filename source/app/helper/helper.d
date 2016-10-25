module app.helper.helper;

import std.conv;
import std.json;
import std.stdio;
import std.array;
import std.random;
import std.string;
import std.digest.md;
import std.experimental.logger;

import app.common;
import app.helper;
import app.model;

mixin template HelperCommon()
{
}

abstract class Helper
{
}

