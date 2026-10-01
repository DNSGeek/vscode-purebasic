// AUTO-GENERATED from PureBasic Reference Manual 6.21
// Do not edit by hand — re-run the extraction script to update

export interface PBFunction {
  name: string;
  signature: string;
  documentation: string;
  category: string;
  returnType?: string;
}

export const PB_KEYWORDS: string[] = [
  "If",
  "Else",
  "ElseIf",
  "EndIf",
  "For",
  "To",
  "Step",
  "Next",
  "ForEach",
  "While",
  "Wend",
  "Repeat",
  "Until",
  "ForEver",
  "Select",
  "Case",
  "Default",
  "EndSelect",
  "Procedure",
  "ProcedureC",
  "ProcedureDLL",
  "ProcedureCDLL",
  "EndProcedure",
  "ProcedureReturn",
  "Declare",
  "DeclareC",
  "DeclareDLL",
  "DeclareCDLL",
  "Module",
  "EndModule",
  "DeclareModule",
  "EndDeclareModule",
  "UseModule",
  "UnuseModule",
  "Structure",
  "EndStructure",
  "StructureUnion",
  "EndStructureUnion",
  "Extends",
  "Interface",
  "EndInterface",
  "Macro",
  "EndMacro",
  "Enumeration",
  "EndEnumeration",
  "Define",
  "Dim",
  "ReDim",
  "Global",
  "Protected",
  "Static",
  "Shared",
  "Threaded",
  "NewList",
  "NewMap",
  "And",
  "Or",
  "Not",
  "XOr",
  "Goto",
  "Gosub",
  "Return",
  "End",
  "Stop",
  "Break",
  "Continue",
  "With",
  "EndWith",
  "Import",
  "ImportC",
  "EndImport",
  "IncludeFile",
  "XIncludeFile",
  "IncludeBinary",
  "IncludePath",
  "EnableExplicit",
  "DisableExplicit",
  "EnableASM",
  "DisableASM",
  "EnableDebugger",
  "DisableDebugger",
  "CompilerIf",
  "CompilerElseIf",
  "CompilerElse",
  "CompilerEndIf",
  "CompilerSelect",
  "CompilerCase",
  "CompilerDefault",
  "CompilerEndSelect",
  "CompilerError",
  "CompilerWarning",
  "DataSection",
  "EndDataSection",
  "Data",
  "Read",
  "Restore",
  "As",
  "Align",
  "OffsetOf",
  "SizeOf",
  "TypeOf",
  "Debug",
  "DebugLevel",
  "CallDebugger",
  "FakeReturn",
  "Swap",
  "Bool",
  "Default",
  "Runtime",
  "Prototype",
  "PrototypeC",
];

export const PB_TYPES: string[] = [
  "b",
  "a",
  "w",
  "u",
  "l",
  "i",
  "q",
  "f",
  "d",
  "s",
  "c",
  "String",
];

export const PB_COMPILER_CONSTANTS: string[] = ["#PB_Compiler_Home"];

export const PB_COMMON_CONSTANTS: string[] = [
  "#True",
  "#False",
  "#Null",
  "#Empty",
  "#NUL",
  "#LF",
  "#CR",
  "#TAB",
  "#CRLF",
  "#PB_Any",
  "#PB_All",
  "#PB_Ignore",
  "#PB_Default",
  "#PB_2DDrawing_AllChannels",
  "#PB_2DDrawing_AlphaBlend",
  "#PB_2DDrawing_AlphaChannel",
  "#PB_2DDrawing_AlphaClip",
  "#PB_2DDrawing_CustomFilter",
  "#PB_2DDrawing_Default",
  "#PB_2DDrawing_Gradient",
  "#PB_2DDrawing_NativeText",
  "#PB_2DDrawing_Outlined",
  "#PB_2DDrawing_Transparent",
  "#PB_2DDrawing_XOr",
  "#PB_3DArchive_FileSystem",
  "#PB_3DArchive_Zip",
  "#PB_Absolute",
  "#PB_Allisspecified",
  "#PB_AntialiasingMode_None",
  "#PB_AntialiasingMode_x2",
  "#PB_AntialiasingMode_x4",
  "#PB_AntialiasingMode_x6",
  "#PB_Ascii",
  "#PB_BillboardGroup",
  "#PB_Billboard_Oriented",
  "#PB_Billboard_Perpendicular",
  "#PB_Billboard_Point",
  "#PB_Billboard_SelfOriented",
  "#PB_Billboard_SelfPerpendicular",
  "#PB_Button_Default",
  "#PB_Button_Image",
  "#PB_Button_Left",
  "#PB_Button_MultiLine",
  "#PB_Button_PressedImage",
  "#PB_Button_Right",
  "#PB_Button_Toggle",
  "#PB_Byte",
  "#PB_ByteLength",
  "#PB_CGI_AuthType",
  "#PB_CGI_ContentLength",
  "#PB_CGI_DocumentRoot",
  "#PB_CGI_File",
  "#PB_CGI_GatewayInterface",
  "#PB_CGI_HeaderContentDisposition",
  "#PB_CGI_HeaderContentLength",
  "#PB_CGI_HeaderContentType",
  "#PB_CGI_HeaderExpires",
  "#PB_CGI_HeaderLocation",
  "#PB_CGI_HeaderPragma",
  "#PB_CGI_HeaderRefresh",
  "#PB_CGI_HeaderSetCookie",
  "#PB_CGI_HeaderStatus",
  "#PB_CGI_HttpAccept",
  "#PB_CGI_HttpAcceptEncoding",
  "#PB_CGI_HttpAcceptLanguage",
  "#PB_CGI_HttpCookie",
  "#PB_CGI_HttpForwarded",
  "#PB_CGI_HttpHost",
  "#PB_CGI_HttpPragma",
  "#PB_CGI_HttpReferer",
  "#PB_CGI_HttpUserAgent",
  "#PB_CGI_LastHeader",
  "#PB_CGI_PathInfo",
  "#PB_CGI_PathTranslated",
  "#PB_CGI_QueryString",
  "#PB_CGI_REquestMethod",
  "#PB_CGI_RemoteAddr",
  "#PB_CGI_RemoteHost",
  "#PB_CGI_RemoteIdent",
  "#PB_CGI_RemotePort",
  "#PB_CGI_RemoteUser",
  "#PB_CGI_RequestMethod",
  "#PB_CGI_RequestURI",
  "#PB_CGI_ScriptFilename",
  "#PB_CGI_ScriptName",
  "#PB_CGI_ServerAdmin",
  "#PB_CGI_ServerName",
  "#PB_CGI_ServerPort",
  "#PB_CGI_ServerProtocol",
  "#PB_CGI_ServerSignature",
  "#PB_CGI_ServerSoftware",
  "#PB_CGI_Text",
  "#PB_Calendar_Borderless",
  "#PB_Calendar_Maximum",
  "#PB_Calendar_Minimum",
  "#PB_Camera_Orthographic",
  "#PB_Camera_Perspective",
  "#PB_Camera_Plot",
  "#PB_Camera_Textured",
  "#PB_Camera_Wireframe",
  "#PB_Canvas_Alt",
  "#PB_Canvas_Border",
  "#PB_Canvas_Buttons",
  "#PB_Canvas_Clip",
  "#PB_Canvas_ClipMouse",
  "#PB_Canvas_Command",
  "#PB_Canvas_Container",
  "#PB_Canvas_Control",
  "#PB_Canvas_Cursor",
  "#PB_Canvas_CustomCursor",
  "#PB_Canvas_DrawFocus",
  "#PB_Canvas_Image",
  "#PB_Canvas_Input",
  "#PB_Canvas_Key",
  "#PB_Canvas_Keyboard",
  "#PB_Canvas_LeftButton",
  "#PB_Canvas_MiddleButton",
  "#PB_Canvas_Modifiers",
  "#PB_Canvas_MouseX",
  "#PB_Canvas_MouseY",
  "#PB_Canvas_RightButton",
  "#PB_Canvas_Shift",
  "#PB_Canvas_WheelDelta",
  "#PB_Character",
  "#PB_CheckBox_Center",
  "#PB_CheckBox_Checked",
  "#PB_CheckBox_Inbetween",
  "#PB_CheckBox_Right",
  "#PB_CheckBox_ThreeState",
  "#PB_CheckBox_Unchecked",
  "#PB_Checkbox_Checked",
  "#PB_Checkbox_Inbetween",
  "#PB_Cipher_CBC",
  "#PB_Cipher_CRC32",
  "#PB_Cipher_Decode",
  "#PB_Cipher_ECB",
  "#PB_Cipher_Encode",
  "#PB_Cipher_HMAC",
  "#PB_Cipher_MD5",
  "#PB_Cipher_NoPadding",
  "#PB_Cipher_SHA1",
  "#PB_Cipher_SHA2",
  "#PB_Cipher_SHA3",
  "#PB_Cipher_URL",
  "#PB_ComboBox3D_Editable",
  "#PB_ComboBox_Editable",
  "#PB_ComboBox_Image",
  "#PB_ComboBox_LowerCase",
  "#PB_ComboBox_UpperCase",
  "#PB_ConeTwistJoint_SwingSpan",
  "#PB_ConeTwistJoint_SwingSpan2",
  "#PB_ConeTwistJoint_TwistSpan",
  "#PB_Container_BorderLess",
  "#PB_Container_Double",
  "#PB_Container_Flat",
  "#PB_Container_Raised",
  "#PB_Container_Single",
  "#PB_Coordinate_Device",
  "#PB_Coordinate_Output",
  "#PB_Coordinate_Source",
  "#PB_Coordinate_User",
  "#PB_Cursor_Arrows",
  "#PB_Cursor_Busy",
  "#PB_Cursor_Cross",
  "#PB_Cursor_Default",
  "#PB_Cursor_Denied",
  "#PB_Cursor_Hand",
  "#PB_Cursor_IBeam",
  "#PB_Cursor_Invisible",
  "#PB_Cursor_LeftDownRightUp",
  "#PB_Cursor_LeftRight",
  "#PB_Cursor_LeftUpRightDown",
  "#PB_Cursor_UpDown",
  "#PB_Database_Blob",
  "#PB_Database_Double",
  "#PB_Database_DynamicCursor",
  "#PB_Database_Float",
  "#PB_Database_Long",
  "#PB_Database_MySQL",
  "#PB_Database_ODBC",
  "#PB_Database_PostgreSQL",
  "#PB_Database_Quad",
  "#PB_Database_SQLite",
  "#PB_Database_StaticCursor",
  "#PB_Database_String",
  "#PB_Date_Accessed",
  "#PB_Date_CheckBox",
  "#PB_Date_Checkbox",
  "#PB_Date_Created",
  "#PB_Date_Day",
  "#PB_Date_Hour",
  "#PB_Date_LocalTime",
  "#PB_Date_Maximum",
  "#PB_Date_Minimum",
  "#PB_Date_Minute",
  "#PB_Date_Modified",
  "#PB_Date_Month",
  "#PB_Date_Second",
  "#PB_Date_UTC",
  "#PB_Date_UpDown",
  "#PB_Date_Week",
  "#PB_Date_Year",
  "#PB_DirectoryEntry_Directory",
  "#PB_DirectoryEntry_File",
  "#PB_Directory_AllUserData",
  "#PB_Directory_Desktop",
  "#PB_Directory_Documents",
  "#PB_Directory_Downloads",
  "#PB_Directory_Musics",
  "#PB_Directory_Pictures",
  "#PB_Directory_ProgramData",
  "#PB_Directory_Programs",
  "#PB_Directory_Public",
  "#PB_Directory_Videos",
  "#PB_Double",
  "#PB_Drag_Copy",
  "#PB_Drag_Enter",
  "#PB_Drag_Finish",
  "#PB_Drag_Leave",
  "#PB_Drag_Link",
  "#PB_Drag_Move",
  "#PB_Drag_None",
  "#PB_Drag_Update",
  "#PB_DrawingMode_AllChannels",
  "#PB_Drop_Files",
  "#PB_Drop_Image",
  "#PB_Drop_Private",
  "#PB_Drop_Text",
  "#PB_Editor3D_ReadOnly",
  "#PB_Editor_ReadOnly",
  "#PB_Editor_TabNavigation",
  "#PB_Editor_WordWrap",
  "#PB_Engine3D_Adjusted",
  "#PB_Engine3D_AverageFPS",
  "#PB_Engine3D_CurrentFPS",
  "#PB_Engine3D_DebugLog",
  "#PB_Engine3D_DebugOutput",
  "#PB_Engine3D_MaximumFPS",
  "#PB_Engine3D_MinimumFPS",
  "#PB_Engine3D_NbRenderedBatches",
  "#PB_Engine3D_NbRenderedTriangles",
  "#PB_Engine3D_NoLog",
  "#PB_Engine3D_Raw",
  "#PB_Engine3D_ResetFPS",
  "#PB_Entity",
  "#PB_EntityAnimation_Average",
  "#PB_EntityAnimation_Cumulative",
  "#PB_EntityAnimation_Manual",
  "#PB_EntityAnimation_Once",
  "#PB_EntityAnimation_Started",
  "#PB_EntityAnimation_Stopped",
  "#PB_EntityAnimation_Unknown",
  "#PB_Entity_AngularSleeping",
  "#PB_Entity_AngularVelocity",
  "#PB_Entity_AngularVelocityX",
  "#PB_Entity_AngularVelocityY",
  "#PB_Entity_AngularVelocityZ",
  "#PB_Entity_BoxBody",
  "#PB_Entity_CapsuleBody",
  "#PB_Entity_CastShadow",
  "#PB_Entity_CompoundBody",
  "#PB_Entity_ConeBody",
  "#PB_Entity_ConvexHullBody",
  "#PB_Entity_CylinderBody",
  "#PB_Entity_DeactivationTime",
  "#PB_Entity_DisableContactResponse",
  "#PB_Entity_DisplaySkeleton",
  "#PB_Entity_ForceVelocity",
  "#PB_Entity_Friction",
  "#PB_Entity_HasContactResponse",
  "#PB_Entity_InheritScale",
  "#PB_Entity_IsActive",
  "#PB_Entity_LinearSleeping",
  "#PB_Entity_LinearVelocity",
  "#PB_Entity_LinearVelocityX",
  "#PB_Entity_LinearVelocityY",
  "#PB_Entity_LinearVelocityZ",
  "#PB_Entity_LocalBoundingBox",
  "#PB_Entity_MassCenterX",
  "#PB_Entity_MassCenterY",
  "#PB_Entity_MassCenterZ",
  "#PB_Entity_MaxBoundingBoxX",
  "#PB_Entity_MaxBoundingBoxY",
  "#PB_Entity_MaxBoundingBoxZ",
  "#PB_Entity_MaxVelocity",
  "#PB_Entity_MinBoundingBoxX",
  "#PB_Entity_MinBoundingBoxY",
  "#PB_Entity_MinBoundingBoxZ",
  "#PB_Entity_MinVelocity",
  "#PB_Entity_NbSubEntities",
  "#PB_Entity_None",
  "#PB_Entity_PlaneBody",
  "#PB_Entity_Restitution",
  "#PB_Entity_ScaleX",
  "#PB_Entity_ScaleY",
  "#PB_Entity_ScaleZ",
  "#PB_Entity_SphereBody",
  "#PB_Entity_StaticBody",
  "#PB_Entity_WorldBoundingBox",
  "#PB_Event3D_ActivateWindow",
  "#PB_Event3D_CloseWindow",
  "#PB_Event3D_Gadget",
  "#PB_Event3D_MoveWindow",
  "#PB_Event3D_SizeWindow",
  "#PB_EventType3D_Change",
  "#PB_EventType3D_Focus",
  "#PB_EventType3D_LostFocus",
  "#PB_EventType_Change",
  "#PB_EventType_ColumnClick",
  "#PB_EventType_Down",
  "#PB_EventType_DownloadEnd",
  "#PB_EventType_DownloadProgress",
  "#PB_EventType_DownloadStart",
  "#PB_EventType_DragStart",
  "#PB_EventType_FirstCustomValue",
  "#PB_EventType_Focus",
  "#PB_EventType_Input",
  "#PB_EventType_KeyDown",
  "#PB_EventType_KeyUp",
  "#PB_EventType_LeftButtonDown",
  "#PB_EventType_LeftButtonUp",
  "#PB_EventType_LeftClick",
  "#PB_EventType_LeftDoubleClick",
  "#PB_EventType_LostFocus",
  "#PB_EventType_MiddleButtonDown",
  "#PB_EventType_MiddleButtonUp",
  "#PB_EventType_MouseEnter",
  "#PB_EventType_MouseLeave",
  "#PB_EventType_MouseMove",
  "#PB_EventType_MouseWheel",
  "#PB_EventType_PopupMenu",
  "#PB_EventType_PopupWindow",
  "#PB_EventType_Refresh",
  "#PB_EventType_Resize",
  "#PB_EventType_RightButtonDown",
  "#PB_EventType_RightButtonUp",
  "#PB_EventType_RightClick",
  "#PB_EventType_RightDoubleClick",
  "#PB_EventType_StatusChange",
  "#PB_EventType_TitleChange",
  "#PB_EventType_Up",
  "#PB_Event_ActivateWindow",
  "#PB_Event_CloseWindow",
  "#PB_Event_DeactivateWindow",
  "#PB_Event_DragStart",
  "#PB_Event_FirstCustomValue",
  "#PB_Event_Gadget",
  "#PB_Event_GadgetDrop",
  "#PB_Event_LeftClick",
  "#PB_Event_LeftDoubleClick",
  "#PB_Event_MaximizeWindow",
  "#PB_Event_Menu",
  "#PB_Event_MinimizeWindow",
  "#PB_Event_MoveWindow",
  "#PB_Event_Repaint",
  "#PB_Event_RestoreWindow",
  "#PB_Event_RightClick",
  "#PB_Event_SizeWindow",
  "#PB_Event_SysTray",
  "#PB_Event_Timer",
  "#PB_Event_WindowDrop",
  "#PB_Explorer_Accessed",
  "#PB_Explorer_AlwaysShowSelection",
  "#PB_Explorer_Attributes",
  "#PB_Explorer_AutoSort",
  "#PB_Explorer_BorderLess",
  "#PB_Explorer_ColumnWidth",
  "#PB_Explorer_Created",
  "#PB_Explorer_Directory",
  "#PB_Explorer_DisplayMode",
  "#PB_Explorer_DrivesOnly",
  "#PB_Explorer_Editable",
  "#PB_Explorer_File",
  "#PB_Explorer_FullRowSelect",
  "#PB_Explorer_GridLines",
  "#PB_Explorer_HeaderDragDrop",
  "#PB_Explorer_HiddenFiles",
  "#PB_Explorer_LargeIcon",
  "#PB_Explorer_List",
  "#PB_Explorer_Modified",
  "#PB_Explorer_MultiSelect",
  "#PB_Explorer_Name",
  "#PB_Explorer_NoButtons",
  "#PB_Explorer_NoDirectoryChange",
  "#PB_Explorer_NoDriveRequester",
  "#PB_Explorer_NoFiles",
  "#PB_Explorer_NoFolders",
  "#PB_Explorer_NoLines",
  "#PB_Explorer_NoMyDocuments",
  "#PB_Explorer_NoParentFolder",
  "#PB_Explorer_NoSort",
  "#PB_Explorer_Report",
  "#PB_Explorer_Selected",
  "#PB_Explorer_Size",
  "#PB_Explorer_SmallIcon",
  "#PB_Explorer_Type",
  "#PB_FTP_Directory",
  "#PB_FTP_Error",
  "#PB_FTP_ExecuteAll",
  "#PB_FTP_ExecuteGroup",
  "#PB_FTP_ExecuteUser",
  "#PB_FTP_File",
  "#PB_FTP_Finished",
  "#PB_FTP_ReadAll",
  "#PB_FTP_ReadGroup",
  "#PB_FTP_ReadUser",
  "#PB_FTP_Started",
  "#PB_FTP_WriteAll",
  "#PB_FTP_WriteGroup",
  "#PB_FTP_WriteUser",
  "#PB_FileSystem_Archive",
  "#PB_FileSystem_Compressed",
  "#PB_FileSystem_ExecAll",
  "#PB_FileSystem_ExecGroup",
  "#PB_FileSystem_ExecUser",
  "#PB_FileSystem_Force",
  "#PB_FileSystem_Hidden",
  "#PB_FileSystem_Link",
  "#PB_FileSystem_NoExtension",
  "#PB_FileSystem_Normal",
  "#PB_FileSystem_ReadAll",
  "#PB_FileSystem_ReadGroup",
  "#PB_FileSystem_ReadOnly",
  "#PB_FileSystem_ReadUser",
  "#PB_FileSystem_Recursive",
  "#PB_FileSystem_System",
  "#PB_FileSystem_WriteAll",
  "#PB_FileSystem_WriteGroup",
  "#PB_FileSystem_WriteUser",
  "#PB_File_Append",
  "#PB_File_IgnoreEOL",
  "#PB_File_NoBuffering",
  "#PB_File_SharedRead",
  "#PB_File_SharedWrite",
  "#PB_Float",
  "#PB_FontRequester_Effects",
  "#PB_Font_Bold",
  "#PB_Font_HighQuality",
  "#PB_Font_Italic",
  "#PB_Font_StrikeOut",
  "#PB_Font_Underline",
  "#PB_Frame_Container",
  "#PB_Frame_Double",
  "#PB_Frame_Flat",
  "#PB_Frame_Single",
  "#PB_GadgetType3D_Button",
  "#PB_GadgetType3D_CheckBox",
  "#PB_GadgetType3D_ComboBox",
  "#PB_GadgetType3D_Container",
  "#PB_GadgetType3D_Editor",
  "#PB_GadgetType3D_Frame",
  "#PB_GadgetType3D_Image",
  "#PB_GadgetType3D_ListView",
  "#PB_GadgetType3D_Option",
  "#PB_GadgetType3D_Panel",
  "#PB_GadgetType3D_ProgressBar",
  "#PB_GadgetType3D_ScrollArea",
  "#PB_GadgetType3D_ScrollBar",
  "#PB_GadgetType3D_Spin",
  "#PB_GadgetType3D_String",
  "#PB_GadgetType3D_Text",
  "#PB_GadgetType3D_Unknown",
  "#PB_GadgetType_Button",
  "#PB_GadgetType_ButtonImage",
  "#PB_GadgetType_Calendar",
  "#PB_GadgetType_Canvas",
  "#PB_GadgetType_CheckBox",
  "#PB_GadgetType_ComboBox",
  "#PB_GadgetType_Container",
  "#PB_GadgetType_Date",
  "#PB_GadgetType_Editor",
  "#PB_GadgetType_ExplorerCombo",
  "#PB_GadgetType_ExplorerList",
  "#PB_GadgetType_ExplorerTree",
  "#PB_GadgetType_Frame",
  "#PB_GadgetType_HyperLink",
  "#PB_GadgetType_IPAddress",
  "#PB_GadgetType_Image",
  "#PB_GadgetType_ListIcon",
  "#PB_GadgetType_ListView",
  "#PB_GadgetType_MDI",
  "#PB_GadgetType_OpenGL",
  "#PB_GadgetType_Option",
  "#PB_GadgetType_Panel",
  "#PB_GadgetType_ProgressBar",
  "#PB_GadgetType_Scintilla",
  "#PB_GadgetType_ScrollArea",
  "#PB_GadgetType_ScrollBar",
  "#PB_GadgetType_Shortcut",
  "#PB_GadgetType_Spin",
  "#PB_GadgetType_Splitter",
  "#PB_GadgetType_String",
  "#PB_GadgetType_Text",
  "#PB_GadgetType_TrackBar",
  "#PB_GadgetType_Tree",
  "#PB_GadgetType_Unknown",
  "#PB_GadgetType_Web",
  "#PB_GadgetType_WebView",
  "#PB_Gadget_ActualSize",
  "#PB_Gadget_BackColor",
  "#PB_Gadget_ContainerCoordinate",
  "#PB_Gadget_FrontColor",
  "#PB_Gadget_GrayTextColor",
  "#PB_Gadget_LineColor",
  "#PB_Gadget_RequiredSize",
  "#PB_Gadget_ScreenCoordinate",
  "#PB_Gadget_TitleBackColor",
  "#PB_Gadget_TitleFrontColor",
  "#PB_Gadget_WindowCoordinate",
  "#PB_HTTP_Aborted",
  "#PB_HTTP_Asynchronous",
  "#PB_HTTP_Debug",
  "#PB_HTTP_Delete",
  "#PB_HTTP_Failed",
  "#PB_HTTP_Get",
  "#PB_HTTP_HeadersOnly",
  "#PB_HTTP_NoRedirect",
  "#PB_HTTP_NoSSLCheck",
  "#PB_HTTP_Patch",
  "#PB_HTTP_Post",
  "#PB_HTTP_Put",
  "#PB_HTTP_Response",
  "#PB_HTTP_StatusCode",
  "#PB_HTTP_Success",
  "#PB_HTTP_WeakSSL",
  "#PB_HingeJoint_LowerLimit",
  "#PB_HingeJoint_UpperLimit",
  "#PB_Http_Aborted",
  "#PB_Http_ErrorMessage",
  "#PB_Http_Failed",
  "#PB_Http_Headers",
  "#PB_Http_Response",
  "#PB_Http_StatusCode",
  "#PB_Http_Success",
  "#PB_HyperLink_Underline",
  "#PB_Hyperlink_Underline",
  "#PB_Image3D_Border",
  "#PB_ImagePlugin_BMP",
  "#PB_ImagePlugin_GIF",
  "#PB_ImagePlugin_ICON",
  "#PB_ImagePlugin_JPEG",
  "#PB_ImagePlugin_JPEG2000",
  "#PB_ImagePlugin_PNG",
  "#PB_ImagePlugin_TGA",
  "#PB_ImagePlugin_TIFF",
  "#PB_Image_BlackAlphaBackground",
  "#PB_Image_Border",
  "#PB_Image_FloydSteinberg",
  "#PB_Image_InternalDepth",
  "#PB_Image_OriginalDepth",
  "#PB_Image_Raised",
  "#PB_Image_Raw",
  "#PB_Image_Smooth",
  "#PB_Image_Transparent",
  "#PB_Image_WhiteAlphaBackground",
  "#PB_InputRequester_Password",
  "#PB_Input_Eof",
  "#PB_Integer",
  "#PB_JSON_Array",
  "#PB_JSON_Boolean",
  "#PB_JSON_NoCase",
  "#PB_JSON_NoClear",
  "#PB_JSON_Null",
  "#PB_JSON_Number",
  "#PB_JSON_Object",
  "#PB_JSON_PrettyPrint",
  "#PB_JSON_String",
  "#PB_Joint_Damping",
  "#PB_Joint_EnableSpring",
  "#PB_Joint_LowerLimit",
  "#PB_Joint_NoLimit",
  "#PB_Joint_Position",
  "#PB_Joint_Stiffness",
  "#PB_Joint_UpperLimit",
  "#PB_Key_0",
  "#PB_Key_1",
  "#PB_Key_2",
  "#PB_Key_3",
  "#PB_Key_4",
  "#PB_Key_5",
  "#PB_Key_6",
  "#PB_Key_7",
  "#PB_Key_8",
  "#PB_Key_9",
  "#PB_Key_A",
  "#PB_Key_Add",
  "#PB_Key_All",
  "#PB_Key_Apostrophe",
  "#PB_Key_B",
  "#PB_Key_Back",
  "#PB_Key_BackSlash",
  "#PB_Key_C",
  "#PB_Key_Capital",
  "#PB_Key_Comma",
  "#PB_Key_D",
  "#PB_Key_Decimal",
  "#PB_Key_Delete",
  "#PB_Key_Divide",
  "#PB_Key_Down",
  "#PB_Key_E",
  "#PB_Key_End",
  "#PB_Key_Equals",
  "#PB_Key_Escape",
  "#PB_Key_F",
  "#PB_Key_F1",
  "#PB_Key_F10",
  "#PB_Key_F11",
  "#PB_Key_F12",
  "#PB_Key_F2",
  "#PB_Key_F3",
  "#PB_Key_F4",
  "#PB_Key_F5",
  "#PB_Key_F6",
  "#PB_Key_F7",
  "#PB_Key_F8",
  "#PB_Key_F9",
  "#PB_Key_G",
  "#PB_Key_Grave",
  "#PB_Key_H",
  "#PB_Key_Home",
  "#PB_Key_I",
  "#PB_Key_Insert",
  "#PB_Key_J",
  "#PB_Key_K",
  "#PB_Key_L",
  "#PB_Key_Left",
  "#PB_Key_LeftAlt",
  "#PB_Key_LeftBracket",
  "#PB_Key_LeftControl",
  "#PB_Key_LeftShift",
  "#PB_Key_M",
  "#PB_Key_Minus",
  "#PB_Key_Multiply",
  "#PB_Key_N",
  "#PB_Key_NumLock",
  "#PB_Key_O",
  "#PB_Key_P",
  "#PB_Key_Pad0",
  "#PB_Key_Pad1",
  "#PB_Key_Pad2",
  "#PB_Key_Pad3",
  "#PB_Key_Pad4",
  "#PB_Key_Pad5",
  "#PB_Key_Pad6",
  "#PB_Key_Pad7",
  "#PB_Key_Pad8",
  "#PB_Key_Pad9",
  "#PB_Key_PadComma",
  "#PB_Key_PadEnter",
  "#PB_Key_PageDown",
  "#PB_Key_PageUp",
  "#PB_Key_Pause",
  "#PB_Key_Period",
  "#PB_Key_Q",
  "#PB_Key_R",
  "#PB_Key_Return",
  "#PB_Key_Right",
  "#PB_Key_RightAlt",
  "#PB_Key_RightBracket",
  "#PB_Key_RightControl",
  "#PB_Key_RightShift",
  "#PB_Key_S",
  "#PB_Key_Scroll",
  "#PB_Key_SemiColon",
  "#PB_Key_Slash",
  "#PB_Key_Space",
  "#PB_Key_Subtract",
  "#PB_Key_T",
  "#PB_Key_Tab",
  "#PB_Key_U",
  "#PB_Key_Up",
  "#PB_Key_V",
  "#PB_Key_W",
  "#PB_Key_X",
  "#PB_Key_Y",
  "#PB_Key_Z",
  "#PB_Keyboard_AllowSystemKeys",
  "#PB_Keyboard_International",
  "#PB_Keyboard_Qwerty",
  "#PB_LensFlare_BurstColor",
  "#PB_LensFlare_CircleColor",
  "#PB_LensFlare_HaloColor",
  "#PB_Light_DiffuseColor",
  "#PB_Light_Directional",
  "#PB_Light_Point",
  "#PB_Light_SpecularColor",
  "#PB_Light_Spot",
  "#PB_ListIcon_AlwaysShowSelection",
  "#PB_ListIcon_Center",
  "#PB_ListIcon_CheckBoxes",
  "#PB_ListIcon_Checked",
  "#PB_ListIcon_ClickedColumn",
  "#PB_ListIcon_ColumnAlignment",
  "#PB_ListIcon_ColumnCount",
  "#PB_ListIcon_ColumnWidth",
  "#PB_ListIcon_DisplayMode",
  "#PB_ListIcon_FullRowSelect",
  "#PB_ListIcon_GridLines",
  "#PB_ListIcon_HeaderDragDrop",
  "#PB_ListIcon_Inbetween",
  "#PB_ListIcon_LargeIcon",
  "#PB_ListIcon_Left",
  "#PB_ListIcon_List",
  "#PB_ListIcon_MultiSelect",
  "#PB_ListIcon_Report",
  "#PB_ListIcon_Right",
  "#PB_ListIcon_Selected",
  "#PB_ListIcon_SmallIcon",
  "#PB_ListIcon_ThreeState",
  "#PB_ListView_ClickSelect",
  "#PB_ListView_MultiSelect",
  "#PB_ListView_Multiselect",
  "#PB_List_After",
  "#PB_List_Before",
  "#PB_List_First",
  "#PB_List_Last",
  "#PB_Local",
  "#PB_Long",
  "#PB_MDI_Arrange",
  "#PB_MDI_AutoSize",
  "#PB_MDI_BorderLess",
  "#PB_MDI_Cascade",
  "#PB_MDI_Image",
  "#PB_MDI_Next",
  "#PB_MDI_NoScrollBars",
  "#PB_MDI_Previous",
  "#PB_MDI_TileHorizontally",
  "#PB_MDI_TileImage",
  "#PB_MDI_TileVertically",
  "#PB_Mail_Asynchronous",
  "#PB_Mail_Bcc",
  "#PB_Mail_Cc",
  "#PB_Mail_Connected",
  "#PB_Mail_Custom",
  "#PB_Mail_Date",
  "#PB_Mail_Debug",
  "#PB_Mail_Error",
  "#PB_Mail_Finished",
  "#PB_Mail_From",
  "#PB_Mail_Subject",
  "#PB_Mail_To",
  "#PB_Mail_UseSMTPS",
  "#PB_Mail_UseSSL",
  "#PB_Mail_XMailer",
  "#PB_Map_ElementCheck",
  "#PB_Map_NoElementCheck",
  "#PB_MaterialShader_CubicEnv",
  "#PB_MaterialShader_CubicEnvBump",
  "#PB_MaterialShader_CubicEnvBumpShader",
  "#PB_MaterialShader_CubicEnvShader",
  "#PB_Material_Add",
  "#PB_Material_AddSigned",
  "#PB_Material_AlphaBlend",
  "#PB_Material_AlphaReject",
  "#PB_Material_AmbientColor",
  "#PB_Material_Animated",
  "#PB_Material_Anisotropic",
  "#PB_Material_AntiClockWiseCull",
  "#PB_Material_Bilinear",
  "#PB_Material_BlendCurrentAlpha",
  "#PB_Material_BlendDiffuseAlpha",
  "#PB_Material_BorderTAM",
  "#PB_Material_BumpShader",
  "#PB_Material_ClampTAM",
  "#PB_Material_ClockWiseCull",
  "#PB_Material_Color",
  "#PB_Material_ColorShader",
  "#PB_Material_CullingMode",
  "#PB_Material_CurvedMap",
  "#PB_Material_DepthBias",
  "#PB_Material_DepthCheck",
  "#PB_Material_DepthWrite",
  "#PB_Material_DiffuseColor",
  "#PB_Material_EnvironmentMap",
  "#PB_Material_Fixed",
  "#PB_Material_Flat",
  "#PB_Material_Gouraud",
  "#PB_Material_Lighting",
  "#PB_Material_MirrorTAM",
  "#PB_Material_Modulate",
  "#PB_Material_ModulateX2",
  "#PB_Material_ModulateX4",
  "#PB_Material_NoCulling",
  "#PB_Material_NoMap",
  "#PB_Material_None",
  "#PB_Material_NormalMap",
  "#PB_Material_OceanShader",
  "#PB_Material_PerpixelShader",
  "#PB_Material_Phong",
  "#PB_Material_PlanarMap",
  "#PB_Material_Point",
  "#PB_Material_PointSprite",
  "#PB_Material_PointSpriteSphereShader",
  "#PB_Material_ProjectiveTexturing",
  "#PB_Material_ReflectionMap",
  "#PB_Material_Replace",
  "#PB_Material_SelfIlluminationColor",
  "#PB_Material_ShadingMode",
  "#PB_Material_Shininess",
  "#PB_Material_SkyShader",
  "#PB_Material_Solid",
  "#PB_Material_SpecularColor",
  "#PB_Material_Substract",
  "#PB_Material_TAM",
  "#PB_Material_TextureRotate",
  "#PB_Material_TextureUScale",
  "#PB_Material_TextureUScroll",
  "#PB_Material_TextureVScale",
  "#PB_Material_TextureVScroll",
  "#PB_Material_Trilinear",
  "#PB_Material_WaterShader",
  "#PB_Material_WaterShaderRTT",
  "#PB_Material_Wireframe",
  "#PB_Material_WrapTAM",
  "#PB_Memory_FollowPointers",
  "#PB_Memory_NoClear",
  "#PB_Menu_About",
  "#PB_Menu_Preferences",
  "#PB_Menu_Quit",
  "#PB_Menu_SysTrayLook",
  "#PB_Mesh_Color",
  "#PB_Mesh_DiagonalAlternate",
  "#PB_Mesh_DiagonalClosestNormal",
  "#PB_Mesh_DiagonalRegular1",
  "#PB_Mesh_DiagonalRegular2",
  "#PB_Mesh_DiagonalShortestLength",
  "#PB_Mesh_Dynamic",
  "#PB_Mesh_Face",
  "#PB_Mesh_LineList",
  "#PB_Mesh_LineStrip",
  "#PB_Mesh_Normal",
  "#PB_Mesh_PointList",
  "#PB_Mesh_Static",
  "#PB_Mesh_Tangent",
  "#PB_Mesh_TriangleFan",
  "#PB_Mesh_TriangleList",
  "#PB_Mesh_TriangleStrip",
  "#PB_Mesh_UVCoordinate",
  "#PB_Mesh_Vertex",
  "#PB_MessageRequester_Cancel",
  "#PB_MessageRequester_Error",
  "#PB_MessageRequester_Info",
  "#PB_MessageRequester_No",
  "#PB_MessageRequester_OK",
  "#PB_MessageRequester_Ok",
  "#PB_MessageRequester_Warning",
  "#PB_MessageRequester_Yes",
  "#PB_MessageRequester_YesNo",
  "#PB_MessageRequester_YesNoCancel",
  "#PB_MouseButton_Left",
  "#PB_MouseButton_Middle",
  "#PB_MouseButton_Right",
  "#PB_NetworkEvent_Connect",
  "#PB_NetworkEvent_Data",
  "#PB_NetworkEvent_Disconnect",
  "#PB_NetworkEvent_None",
  "#PB_Network_IPv4",
  "#PB_Network_IPv6",
  "#PB_Network_NoTLS",
  "#PB_Network_TCP",
  "#PB_Network_TLSv1",
  "#PB_Network_TLSv1_0",
  "#PB_Network_TLSv1_1",
  "#PB_Network_TLSv1_2",
  "#PB_Network_TLSv1_3",
  "#PB_Network_UDP",
  "#PB_NodeAnimation_Linear",
  "#PB_NodeAnimation_LinearRotation",
  "#PB_NodeAnimation_Once",
  "#PB_NodeAnimation_SphericalRotation",
  "#PB_NodeAnimation_Spline",
  "#PB_NodeAnimation_Started",
  "#PB_NodeAnimation_Stopped",
  "#PB_OS_Linux_2_2",
  "#PB_OS_Linux_2_4",
  "#PB_OS_Linux_2_6",
  "#PB_OS_Linux_Future",
  "#PB_OS_MacOSX_10_0",
  "#PB_OS_MacOSX_10_1",
  "#PB_OS_MacOSX_10_10",
  "#PB_OS_MacOSX_10_11",
  "#PB_OS_MacOSX_10_12",
  "#PB_OS_MacOSX_10_13",
  "#PB_OS_MacOSX_10_14",
  "#PB_OS_MacOSX_10_15",
  "#PB_OS_MacOSX_10_2",
  "#PB_OS_MacOSX_10_3",
  "#PB_OS_MacOSX_10_4",
  "#PB_OS_MacOSX_10_5",
  "#PB_OS_MacOSX_10_6",
  "#PB_OS_MacOSX_10_7",
  "#PB_OS_MacOSX_10_8",
  "#PB_OS_MacOSX_10_9",
  "#PB_OS_MacOSX_11",
  "#PB_OS_MacOSX_12",
  "#PB_OS_MacOSX_13",
  "#PB_OS_MacOSX_14",
  "#PB_OS_MacOSX_15",
  "#PB_OS_MacOSX_Future",
  "#PB_OS_Windows_10",
  "#PB_OS_Windows_11",
  "#PB_OS_Windows_2000",
  "#PB_OS_Windows_7",
  "#PB_OS_Windows_8",
  "#PB_OS_Windows_8_1",
  "#PB_OS_Windows_95",
  "#PB_OS_Windows_98",
  "#PB_OS_Windows_Future",
  "#PB_OS_Windows_ME",
  "#PB_OS_Windows_NT3_51",
  "#PB_OS_Windows_NT_4",
  "#PB_OS_Windows_Server_2003",
  "#PB_OS_Windows_Server_2008",
  "#PB_OS_Windows_Server_2008_R2",
  "#PB_OS_Windows_Server_2012",
  "#PB_OS_Windows_Server_2012_R2",
  "#PB_OS_Windows_Server_2016",
  "#PB_OS_Windows_Server_2019",
  "#PB_OS_Windows_Server_2022",
  "#PB_OS_Windows_Server_2025",
  "#PB_OS_Windows_Vista",
  "#PB_OS_Windows_XP",
  "#PB_OnError_Breakpoint",
  "#PB_OnError_DivideByZero",
  "#PB_OnError_EAX",
  "#PB_OnError_EBP",
  "#PB_OnError_EBX",
  "#PB_OnError_ECX",
  "#PB_OnError_EDI",
  "#PB_OnError_EDX",
  "#PB_OnError_ESI",
  "#PB_OnError_ESP",
  "#PB_OnError_Flags",
  "#PB_OnError_Floatingpoint",
  "#PB_OnError_IllegalInstruction",
  "#PB_OnError_InvalidMemory",
  "#PB_OnError_PriviledgedInstruction",
  "#PB_OnError_R15",
  "#PB_OnError_R8",
  "#PB_OnError_R9",
  "#PB_OnError_RAX",
  "#PB_OnError_RBP",
  "#PB_OnError_RBX",
  "#PB_OnError_RCX",
  "#PB_OnError_RDI",
  "#PB_OnError_RDX",
  "#PB_OnError_RSI",
  "#PB_OnError_RSP",
  "#PB_OpenGL_16BitDepthBuffer",
  "#PB_OpenGL_24BitDepthBuffer",
  "#PB_OpenGL_32BitAccumulationBuffer",
  "#PB_OpenGL_64BitAccumulationBuffer",
  "#PB_OpenGL_8BitStencilBuffer",
  "#PB_OpenGL_Alt",
  "#PB_OpenGL_Buttons",
  "#PB_OpenGL_Command",
  "#PB_OpenGL_Control",
  "#PB_OpenGL_Cursor",
  "#PB_OpenGL_CustomCursor",
  "#PB_OpenGL_FlipBuffers",
  "#PB_OpenGL_FlipSynchronization",
  "#PB_OpenGL_Input",
  "#PB_OpenGL_Key",
  "#PB_OpenGL_Keyboard",
  "#PB_OpenGL_LeftButton",
  "#PB_OpenGL_MiddleButton",
  "#PB_OpenGL_Modifiers",
  "#PB_OpenGL_MouseX",
  "#PB_OpenGL_MouseY",
  "#PB_OpenGL_NoAccumulationBuffer",
  "#PB_OpenGL_NoDepthBuffer",
  "#PB_OpenGL_NoFlipSynchronization",
  "#PB_OpenGL_NoStencilBuffer",
  "#PB_OpenGL_RightButton",
  "#PB_OpenGL_SetContext",
  "#PB_OpenGL_Shift",
  "#PB_OpenGL_WheelDelta",
  "#PB_Orientation_AngleAxis",
  "#PB_Orientation_Direction",
  "#PB_Orientation_DirectionLDVX",
  "#PB_Orientation_DirectionLDVXN",
  "#PB_Orientation_DirectionLDVY",
  "#PB_Orientation_DirectionLDVYN",
  "#PB_Orientation_DirectionLDVZ",
  "#PB_Orientation_DirectionLDVZN",
  "#PB_Orientation_PitchYawRoll",
  "#PB_Orientation_Quaternion",
  "#PB_PackerPlugin_BriefLZ",
  "#PB_PackerPlugin_Jcalg1",
  "#PB_PackerPlugin_Lzma",
  "#PB_PackerPlugin_Tar",
  "#PB_PackerPlugin_Zip",
  "#PB_Packer_Bzip2",
  "#PB_Packer_CompressedSize",
  "#PB_Packer_Directory",
  "#PB_Packer_File",
  "#PB_Packer_Gzip",
  "#PB_Packer_UncompressedSize",
  "#PB_Panel3D_ItemHeight",
  "#PB_Panel3D_ItemWidth",
  "#PB_Panel3D_TabHeight",
  "#PB_Panel_ItemHeight",
  "#PB_Panel_ItemWidth",
  "#PB_Panel_TabHeight",
  "#PB_Parent",
  "#PB_ParticleEmitter",
  "#PB_Particle_Box",
  "#PB_Particle_Point",
  "#PB_Path_Connected",
  "#PB_Path_CounterClockwise",
  "#PB_Path_Default",
  "#PB_Path_DiagonalCorner",
  "#PB_Path_Preserve",
  "#PB_Path_Relative",
  "#PB_Path_RoundCorner",
  "#PB_Path_RoundEnd",
  "#PB_Path_SquareEnd",
  "#PB_Path_Winding",
  "#PB_PixelFormat_15Bits",
  "#PB_PixelFormat_16Bits",
  "#PB_PixelFormat_24Bits_BGR",
  "#PB_PixelFormat_24Bits_RGB",
  "#PB_PixelFormat_32Bits_BGR",
  "#PB_PixelFormat_32Bits_RGB",
  "#PB_PixelFormat_8Bits",
  "#PB_PixelFormat_NoAlpha",
  "#PB_PixelFormat_ReversedY",
  "#PB_PointJoint_Damping",
  "#PB_PointJoint_Tau",
  "#PB_Preference_GroupSeparator",
  "#PB_Preference_NoBOM",
  "#PB_Preference_NoSpace",
  "#PB_ProcessPureBasicEvents",
  "#PB_Program_Ascii",
  "#PB_Program_Connect",
  "#PB_Program_Eof",
  "#PB_Program_Error",
  "#PB_Program_Hide",
  "#PB_Program_Open",
  "#PB_Program_Read",
  "#PB_Program_UTF8",
  "#PB_Program_Unicode",
  "#PB_Program_Wait",
  "#PB_Program_Write",
  "#PB_ProgressBar3D_Maximum",
  "#PB_ProgressBar3D_Minimum",
  "#PB_ProgressBar_Maximum",
  "#PB_ProgressBar_Minimum",
  "#PB_ProgressBar_Smooth",
  "#PB_ProgressBar_Unknown",
  "#PB_ProgressBar_Vertical",
  "#PB_Quad",
  "#PB_RegularExpression_AnyNewLine",
  "#PB_RegularExpression_DotAll",
  "#PB_RegularExpression_Extended",
  "#PB_RegularExpression_MultiLine",
  "#PB_RegularExpression_NoCase",
  "#PB_Relative",
  "#PB_Requester_MultiSelection",
  "#PB_Round_Down",
  "#PB_Round_Nearest",
  "#PB_Round_Up",
  "#PB_Screen_NoSynchronization",
  "#PB_Screen_SmartSynchronization",
  "#PB_Screen_WaitSynchronization",
  "#PB_ScrollArea3D_InnerHeight",
  "#PB_ScrollArea3D_InnerWidth",
  "#PB_ScrollArea3D_X",
  "#PB_ScrollArea3D_Y",
  "#PB_ScrollArea_BorderLess",
  "#PB_ScrollArea_Center",
  "#PB_ScrollArea_Flat",
  "#PB_ScrollArea_InnerHeight",
  "#PB_ScrollArea_InnerWidth",
  "#PB_ScrollArea_Raised",
  "#PB_ScrollArea_ScrollStep",
  "#PB_ScrollArea_Single",
  "#PB_ScrollArea_X",
  "#PB_ScrollArea_Y",
  "#PB_ScrollBar3D_Maximum",
  "#PB_ScrollBar3D_Minimum",
  "#PB_ScrollBar3D_PageLength",
  "#PB_ScrollBar3D_Vertical",
  "#PB_ScrollBar_Maximum",
  "#PB_ScrollBar_Minimum",
  "#PB_ScrollBar_PageLength",
  "#PB_ScrollBar_Vertical",
  "#PB_SerialPort_Break",
  "#PB_SerialPort_CTS",
  "#PB_SerialPort_DCD",
  "#PB_SerialPort_DSR",
  "#PB_SerialPort_DTR",
  "#PB_SerialPort_EOFSent",
  "#PB_SerialPort_EvenParity",
  "#PB_SerialPort_Frame",
  "#PB_SerialPort_IOE",
  "#PB_SerialPort_MarkParity",
  "#PB_SerialPort_NoHandshake",
  "#PB_SerialPort_NoParity",
  "#PB_SerialPort_OddParity",
  "#PB_SerialPort_OverRun",
  "#PB_SerialPort_RI",
  "#PB_SerialPort_RTS",
  "#PB_SerialPort_RtsCtsHandshake",
  "#PB_SerialPort_RtsHandshake",
  "#PB_SerialPort_RxOver",
  "#PB_SerialPort_RxParity",
  "#PB_SerialPort_SpaceParity",
  "#PB_SerialPort_TXD",
  "#PB_SerialPort_TxFull",
  "#PB_SerialPort_WaitingCTS",
  "#PB_SerialPort_WaitingDSR",
  "#PB_SerialPort_WaitingRLSD",
  "#PB_SerialPort_XoffCharacter",
  "#PB_SerialPort_XoffReceived",
  "#PB_SerialPort_XoffSent",
  "#PB_SerialPort_XonCharacter",
  "#PB_SerialPort_XonXoffHandshake",
  "#PB_Shader_AmbientLightColour",
  "#PB_Shader_AnimationParametric",
  "#PB_Shader_CameraPosition",
  "#PB_Shader_CameraPositionObjectSpace",
  "#PB_Shader_Costime02pi",
  "#PB_Shader_Costime0X",
  "#PB_Shader_Custom",
  "#PB_Shader_DerivedAmbientLightColour",
  "#PB_Shader_DerivedLightDiffuseColour",
  "#PB_Shader_DerivedLightDiffuseColourArray",
  "#PB_Shader_DerivedLightSpecularColour",
  "#PB_Shader_DerivedLightSpecularColourArray",
  "#PB_Shader_DerivedSceneColour",
  "#PB_Shader_FarClipDistance",
  "#PB_Shader_Float",
  "#PB_Shader_FogColour",
  "#PB_Shader_FogParams",
  "#PB_Shader_Fov",
  "#PB_Shader_Fps",
  "#PB_Shader_Fragment",
  "#PB_Shader_Integer",
  "#PB_Shader_InverseProjectionMatrix",
  "#PB_Shader_InverseTextureSize",
  "#PB_Shader_InverseTransposeProjectionMatrix",
  "#PB_Shader_InverseTransposeViewMatrix",
  "#PB_Shader_InverseTransposeViewprojMatrix",
  "#PB_Shader_InverseTransposeWorldMatrix",
  "#PB_Shader_InverseTransposeWorldviewMatrix",
  "#PB_Shader_InverseTransposeWorldviewprojMatrix",
  "#PB_Shader_InverseViewMatrix",
  "#PB_Shader_InverseViewportHeight",
  "#PB_Shader_InverseViewportWidth",
  "#PB_Shader_InverseViewprojMatrix",
  "#PB_Shader_InverseWorldMatrix",
  "#PB_Shader_InverseWorldviewMatrix",
  "#PB_Shader_InverseWorldviewprojMatrix",
  "#PB_Shader_LightAttenuation",
  "#PB_Shader_LightAttenuationArray",
  "#PB_Shader_LightCastsShadows",
  "#PB_Shader_LightCount",
  "#PB_Shader_LightCustom",
  "#PB_Shader_LightDiffuseColour",
  "#PB_Shader_LightDiffuseColourArray",
  "#PB_Shader_LightDiffuseColourPowerScaled",
  "#PB_Shader_LightDiffuseColourPowerScaledArray",
  "#PB_Shader_LightDirection",
  "#PB_Shader_LightDirectionArray",
  "#PB_Shader_LightDirectionObjectSpace",
  "#PB_Shader_LightDirectionObjectSpaceArray",
  "#PB_Shader_LightDirectionViewSpace",
  "#PB_Shader_LightDirectionViewSpaceArray",
  "#PB_Shader_LightDistanceObjectSpace",
  "#PB_Shader_LightDistanceObjectSpaceArray",
  "#PB_Shader_LightNumber",
  "#PB_Shader_LightPosition",
  "#PB_Shader_LightPositionArray",
  "#PB_Shader_LightPositionObjectSpace",
  "#PB_Shader_LightPositionObjectSpaceArray",
  "#PB_Shader_LightPositionViewSpace",
  "#PB_Shader_LightPositionViewSpaceArray",
  "#PB_Shader_LightPowerScale",
  "#PB_Shader_LightPowerScaleArray",
  "#PB_Shader_LightSpecularColour",
  "#PB_Shader_LightSpecularColourArray",
  "#PB_Shader_LightSpecularColourPowerScaled",
  "#PB_Shader_LightSpecularColourPowerScaledArray",
  "#PB_Shader_LodCameraPosition",
  "#PB_Shader_LodCameraPositionObjectSpace",
  "#PB_Shader_NearClipDistance",
  "#PB_Shader_PackedTextureSize",
  "#PB_Shader_PassIterationNumber",
  "#PB_Shader_PassNumber",
  "#PB_Shader_ProjectionMatrix",
  "#PB_Shader_SceneDepthRange",
  "#PB_Shader_ShadowColour",
  "#PB_Shader_ShadowExtrusionDistance",
  "#PB_Shader_ShadowSceneDepthRange",
  "#PB_Shader_Sintime01",
  "#PB_Shader_Sintime02pi",
  "#PB_Shader_Sintime0X",
  "#PB_Shader_SpotlightParams",
  "#PB_Shader_SpotlightParamsArray",
  "#PB_Shader_SpotlightViewprojMatrix",
  "#PB_Shader_SpotlightViewprojMatrixArray",
  "#PB_Shader_SpotlightWorldviewprojMatrix",
  "#PB_Shader_SurfaceAmbientColour",
  "#PB_Shader_SurfaceDiffuseColour",
  "#PB_Shader_SurfaceEmissiveColour",
  "#PB_Shader_SurfaceShininess",
  "#PB_Shader_SurfaceSpecularColour",
  "#PB_Shader_Tantime01",
  "#PB_Shader_Tantime02pi",
  "#PB_Shader_Tantime0X",
  "#PB_Shader_TexelOffsets",
  "#PB_Shader_TextureMatrix",
  "#PB_Shader_TextureSize",
  "#PB_Shader_TextureViewprojMatrix",
  "#PB_Shader_TextureViewprojMatrixArray",
  "#PB_Shader_TextureWorldviewprojMatrixArray",
  "#PB_Shader_Time",
  "#PB_Shader_Time01",
  "#PB_Shader_Time01Packed",
  "#PB_Shader_Time02pi",
  "#PB_Shader_Time02piPacked",
  "#PB_Shader_Time0X",
  "#PB_Shader_Time0XPacked",
  "#PB_Shader_TransposeProjectionMatrix",
  "#PB_Shader_TransposeViewMatrix",
  "#PB_Shader_TransposeViewprojMatrix",
  "#PB_Shader_TransposeWorldMatrix",
  "#PB_Shader_TransposeWorldviewMatrix",
  "#PB_Shader_TransposeWorldviewprojMatrix",
  "#PB_Shader_Vector3",
  "#PB_Shader_Vector4",
  "#PB_Shader_Vertex",
  "#PB_Shader_VertexWinding",
  "#PB_Shader_ViewDirection",
  "#PB_Shader_ViewMatrix",
  "#PB_Shader_ViewSideVector",
  "#PB_Shader_ViewUpVector",
  "#PB_Shader_ViewportSize",
  "#PB_Shader_ViewportWidth",
  "#PB_Shader_ViewprojMatrix",
  "#PB_Shader_WorldDualquaternionArray2x4",
  "#PB_Shader_WorldMatrix",
  "#PB_Shader_WorldMatrixArray",
  "#PB_Shader_WorldMatrixArray3x4",
  "#PB_Shader_WorldviewMatrix",
  "#PB_Shader_WorldviewprojMatrix",
  "#PB_Shadow_Additive",
  "#PB_Shadow_Color",
  "#PB_Shadow_FarDistance",
  "#PB_Shadow_Modulative",
  "#PB_Shadow_None",
  "#PB_Shadow_TextureAdditive",
  "#PB_Shadow_TextureModulative",
  "#PB_ShortCut_F",
  "#PB_Shortcut_0",
  "#PB_Shortcut_1",
  "#PB_Shortcut_2",
  "#PB_Shortcut_3",
  "#PB_Shortcut_4",
  "#PB_Shortcut_5",
  "#PB_Shortcut_6",
  "#PB_Shortcut_7",
  "#PB_Shortcut_8",
  "#PB_Shortcut_9",
  "#PB_Shortcut_A",
  "#PB_Shortcut_Add",
  "#PB_Shortcut_All",
  "#PB_Shortcut_Alt",
  "#PB_Shortcut_Apps",
  "#PB_Shortcut_B",
  "#PB_Shortcut_Back",
  "#PB_Shortcut_C",
  "#PB_Shortcut_Capital",
  "#PB_Shortcut_Clear",
  "#PB_Shortcut_Command",
  "#PB_Shortcut_Control",
  "#PB_Shortcut_D",
  "#PB_Shortcut_Decimal",
  "#PB_Shortcut_Delete",
  "#PB_Shortcut_Divide",
  "#PB_Shortcut_Down",
  "#PB_Shortcut_E",
  "#PB_Shortcut_End",
  "#PB_Shortcut_Escape",
  "#PB_Shortcut_Execute",
  "#PB_Shortcut_F",
  "#PB_Shortcut_F1",
  "#PB_Shortcut_F10",
  "#PB_Shortcut_F11",
  "#PB_Shortcut_F12",
  "#PB_Shortcut_F13",
  "#PB_Shortcut_F14",
  "#PB_Shortcut_F15",
  "#PB_Shortcut_F16",
  "#PB_Shortcut_F17",
  "#PB_Shortcut_F18",
  "#PB_Shortcut_F19",
  "#PB_Shortcut_F2",
  "#PB_Shortcut_F20",
  "#PB_Shortcut_F21",
  "#PB_Shortcut_F22",
  "#PB_Shortcut_F23",
  "#PB_Shortcut_F24",
  "#PB_Shortcut_F3",
  "#PB_Shortcut_F4",
  "#PB_Shortcut_F5",
  "#PB_Shortcut_F6",
  "#PB_Shortcut_F7",
  "#PB_Shortcut_F8",
  "#PB_Shortcut_F9",
  "#PB_Shortcut_G",
  "#PB_Shortcut_H",
  "#PB_Shortcut_Help",
  "#PB_Shortcut_Home",
  "#PB_Shortcut_I",
  "#PB_Shortcut_Insert",
  "#PB_Shortcut_J",
  "#PB_Shortcut_K",
  "#PB_Shortcut_L",
  "#PB_Shortcut_Left",
  "#PB_Shortcut_LeftWindows",
  "#PB_Shortcut_M",
  "#PB_Shortcut_Menu",
  "#PB_Shortcut_Multiply",
  "#PB_Shortcut_N",
  "#PB_Shortcut_Numlock",
  "#PB_Shortcut_O",
  "#PB_Shortcut_P",
  "#PB_Shortcut_Pad0",
  "#PB_Shortcut_Pad1",
  "#PB_Shortcut_Pad2",
  "#PB_Shortcut_Pad3",
  "#PB_Shortcut_Pad4",
  "#PB_Shortcut_Pad5",
  "#PB_Shortcut_Pad6",
  "#PB_Shortcut_Pad7",
  "#PB_Shortcut_Pad8",
  "#PB_Shortcut_Pad9",
  "#PB_Shortcut_PageDown",
  "#PB_Shortcut_PageUp",
  "#PB_Shortcut_Pause",
  "#PB_Shortcut_Print",
  "#PB_Shortcut_Q",
  "#PB_Shortcut_R",
  "#PB_Shortcut_Return",
  "#PB_Shortcut_Right",
  "#PB_Shortcut_RightWindows",
  "#PB_Shortcut_S",
  "#PB_Shortcut_Scroll",
  "#PB_Shortcut_Select",
  "#PB_Shortcut_Separator",
  "#PB_Shortcut_Shift",
  "#PB_Shortcut_Snapshot",
  "#PB_Shortcut_Space",
  "#PB_Shortcut_Subtract",
  "#PB_Shortcut_T",
  "#PB_Shortcut_Tab",
  "#PB_Shortcut_U",
  "#PB_Shortcut_Up",
  "#PB_Shortcut_V",
  "#PB_Shortcut_W",
  "#PB_Shortcut_X",
  "#PB_Shortcut_Y",
  "#PB_Shortcut_Z",
  "#PB_SkyDome_CloudsHeight",
  "#PB_SkyDome_Free",
  "#PB_SkyDome_NbCloudLayers",
  "#PB_SkyDome_RiseColor",
  "#PB_SkyDome_SkyColor",
  "#PB_SliderJoint_LowerLimit",
  "#PB_SliderJoint_UpperLimit",
  "#PB_Sort_Ascending",
  "#PB_Sort_Descending",
  "#PB_Sort_Equal",
  "#PB_Sort_Greater",
  "#PB_Sort_Lesser",
  "#PB_Sort_NoCase",
  "#PB_Sound3D_Loop",
  "#PB_Sound3D_Streaming",
  "#PB_Sound_Frame",
  "#PB_Sound_Loop",
  "#PB_Sound_Millisecond",
  "#PB_Sound_MultiChannel",
  "#PB_Sound_Paused",
  "#PB_Sound_Playing",
  "#PB_Sound_Stopped",
  "#PB_Sound_Streaming",
  "#PB_Sound_Unknown",
  "#PB_Spin3D_Maximum",
  "#PB_Spin3D_Minimum",
  "#PB_Spin_Maximum",
  "#PB_Spin_Minimum",
  "#PB_Spin_Numeric",
  "#PB_Spin_ReadOnly",
  "#PB_Splitter_FirstFixed",
  "#PB_Splitter_FirstGadget",
  "#PB_Splitter_FirstMinimumSize",
  "#PB_Splitter_SecondFixed",
  "#PB_Splitter_SecondGadget",
  "#PB_Splitter_SecondMinimumSize",
  "#PB_Splitter_Separator",
  "#PB_Splitter_Vertical",
  "#PB_Sprite_AlphaBlending",
  "#PB_Sprite_BilinearFiltering",
  "#PB_Sprite_BlendDestinationAlpha",
  "#PB_Sprite_BlendDestinationColor",
  "#PB_Sprite_BlendInvertDestinationAlpha",
  "#PB_Sprite_BlendInvertDestinationColor",
  "#PB_Sprite_BlendInvertSourceAlpha",
  "#PB_Sprite_BlendInvertSourceColor",
  "#PB_Sprite_BlendOne",
  "#PB_Sprite_BlendSourceAlpha",
  "#PB_Sprite_BlendSourceColor",
  "#PB_Sprite_BlendZero",
  "#PB_Sprite_NoFiltering",
  "#PB_Sprite_PixelCollision",
  "#PB_Sprite_Transparent",
  "#PB_StatusBar_BorderLess",
  "#PB_StatusBar_Center",
  "#PB_StatusBar_Raised",
  "#PB_StatusBar_Right",
  "#PB_String",
  "#PB_String3D_Numeric",
  "#PB_String3D_Password",
  "#PB_String3D_ReadOnly",
  "#PB_String_BorderLess",
  "#PB_String_CaseSensitive",
  "#PB_String_Equal",
  "#PB_String_EscapeInternal",
  "#PB_String_EscapeJSON",
  "#PB_String_EscapeXML",
  "#PB_String_Greater",
  "#PB_String_InPlace",
  "#PB_String_Lower",
  "#PB_String_LowerCase",
  "#PB_String_MaximumLength",
  "#PB_String_NoCase",
  "#PB_String_NoCaseAscii",
  "#PB_String_NoZero",
  "#PB_String_Numeric",
  "#PB_String_Password",
  "#PB_String_ReadOnly",
  "#PB_String_UpperCase",
  "#PB_System_CPUs",
  "#PB_System_FreePhysical",
  "#PB_System_FreeSwap",
  "#PB_System_FreeVirtual",
  "#PB_System_PageSize",
  "#PB_System_ProcessCPUs",
  "#PB_System_TotalPhysical",
  "#PB_System_TotalSwap",
  "#PB_System_TotalVirtual",
  "#PB_Terrain_CastShadows",
  "#PB_Terrain_Lightmap",
  "#PB_Terrain_LowLODShadows",
  "#PB_Terrain_NormalMapping",
  "#PB_Text3D_Bottom",
  "#PB_Text3D_HorizontallyCentered",
  "#PB_Text3D_Left",
  "#PB_Text3D_Top",
  "#PB_Text3D_VerticallyCentered",
  "#PB_Text_Border",
  "#PB_Text_Center",
  "#PB_Text_Right",
  "#PB_Texture_AutomaticUpdate",
  "#PB_Texture_CameraViewPort",
  "#PB_Texture_ManualUpdate",
  "#PB_ToolBar_InlineText",
  "#PB_ToolBar_Large",
  "#PB_ToolBar_Normal",
  "#PB_ToolBar_Small",
  "#PB_ToolBar_Text",
  "#PB_ToolBar_Toggle",
  "#PB_TrackBar_Maximum",
  "#PB_TrackBar_Minimum",
  "#PB_TrackBar_Ticks",
  "#PB_TrackBar_Vertical",
  "#PB_Tree_AlwaysShowSelection",
  "#PB_Tree_CheckBoxes",
  "#PB_Tree_Checked",
  "#PB_Tree_Collapsed",
  "#PB_Tree_Expanded",
  "#PB_Tree_Inbetween",
  "#PB_Tree_NoButtons",
  "#PB_Tree_NoLines",
  "#PB_Tree_Selected",
  "#PB_Tree_SubLevel",
  "#PB_Tree_ThreeState",
  "#PB_URL_Parameters",
  "#PB_URL_Password",
  "#PB_URL_Path",
  "#PB_URL_Port",
  "#PB_URL_Protocol",
  "#PB_URL_Site",
  "#PB_URL_User",
  "#PB_UTF16BE",
  "#PB_UTF32",
  "#PB_UTF32BE",
  "#PB_UTF8",
  "#PB_Unicode",
  "#PB_Unit_Inch",
  "#PB_Unit_Millimeter",
  "#PB_Unit_Pixel",
  "#PB_Unit_Point",
  "#PB_VectorImage_Default",
  "#PB_VectorImage_Repeat",
  "#PB_VectorParagraph_Block",
  "#PB_VectorParagraph_Center",
  "#PB_VectorParagraph_Left",
  "#PB_VectorParagraph_Right",
  "#PB_VectorText_Baseline",
  "#PB_VectorText_Default",
  "#PB_VectorText_Offset",
  "#PB_VectorText_Visible",
  "#PB_Vector_NegativeX",
  "#PB_Vector_NegativeY",
  "#PB_Vector_NegativeZ",
  "#PB_Vector_X",
  "#PB_Vector_Y",
  "#PB_Vector_Z",
  "#PB_Vehicle_ContactPointNormalX",
  "#PB_Vehicle_ContactPointNormalY",
  "#PB_Vehicle_ContactPointNormalZ",
  "#PB_Vehicle_ContactPointX",
  "#PB_Vehicle_ContactPointY",
  "#PB_Vehicle_ContactPointZ",
  "#PB_Vehicle_CurrentSpeed",
  "#PB_Vehicle_ForwardVectorX",
  "#PB_Vehicle_ForwardVectorY",
  "#PB_Vehicle_ForwardVectorZ",
  "#PB_Vehicle_Friction",
  "#PB_Vehicle_IsInContact",
  "#PB_Vehicle_MaxSuspensionCompression",
  "#PB_Vehicle_MaxSuspensionForce",
  "#PB_Vehicle_MaxSuspensionLength",
  "#PB_Vehicle_RollInfluence",
  "#PB_Vehicle_SuspensionStiffness",
  "#PB_Vehicle_WheelDampingCompression",
  "#PB_Vehicle_WheelDampingRelaxation",
  "#PB_Water_Foam",
  "#PB_Water_Free",
  "#PB_Water_SkyColor",
  "#PB_Water_Swell",
  "#PB_Water_WaterColor",
  "#PB_Water_WaveHeight",
  "#PB_Water_WaveSmall",
  "#PB_WebView_Debug",
  "#PB_WebView_HtmlCode",
  "#PB_Web_Back",
  "#PB_Web_BlockPopupMenu",
  "#PB_Web_BlockPopups",
  "#PB_Web_Busy",
  "#PB_Web_Edge",
  "#PB_Web_Forward",
  "#PB_Web_HtmlCode",
  "#PB_Web_NavigationCallback",
  "#PB_Web_PageTitle",
  "#PB_Web_Progress",
  "#PB_Web_ProgressMax",
  "#PB_Web_Refresh",
  "#PB_Web_ScrollX",
  "#PB_Web_ScrollY",
  "#PB_Web_SelectedText",
  "#PB_Web_StatusMessage",
  "#PB_Web_Stop",
  "#PB_Window3D_BorderLess",
  "#PB_Window3D_Invisible",
  "#PB_Window3D_SizeGadget",
  "#PB_Window_BorderLess",
  "#PB_Window_Borderless",
  "#PB_Window_FrameCoordinate",
  "#PB_Window_InnerCoordinate",
  "#PB_Window_Invisible",
  "#PB_Window_Maximize",
  "#PB_Window_MaximizeGadget",
  "#PB_Window_Minimize",
  "#PB_Window_MinimizeGadget",
  "#PB_Window_NoActivate",
  "#PB_Window_NoChildEvents",
  "#PB_Window_NoGadgets",
  "#PB_Window_Normal",
  "#PB_Window_ProcessChildEvents",
  "#PB_Window_ScreenCentered",
  "#PB_Window_Screencentered",
  "#PB_Window_SizeGadget",
  "#PB_Window_SystemMenu",
  "#PB_Window_TitleBar",
  "#PB_Window_Tool",
  "#PB_Window_WindowCentered",
  "#PB_Word",
  "#PB_World",
  "#PB_World_DebugBody",
  "#PB_World_DebugEntity",
  "#PB_World_DebugNone",
  "#PB_World_WaterPick",
  "#PB_XML_Aborted",
  "#PB_XML_AsyncEntity",
  "#PB_XML_AttributeExternalEntityRef",
  "#PB_XML_BadCharacterRef",
  "#PB_XML_BinaryEntityRef",
  "#PB_XML_CData",
  "#PB_XML_CantChangeFeatures",
  "#PB_XML_Comment",
  "#PB_XML_CutNewline",
  "#PB_XML_CutSpace",
  "#PB_XML_DTD",
  "#PB_XML_DublicateAttribute",
  "#PB_XML_EntityDeclaredInPE",
  "#PB_XML_ExternalEntityHandling",
  "#PB_XML_FeatureRequiresDTD",
  "#PB_XML_Finished",
  "#PB_XML_IncompletePE",
  "#PB_XML_IncorrectEncoding",
  "#PB_XML_Instruction",
  "#PB_XML_InvalidToken",
  "#PB_XML_JunkAfterDocElement",
  "#PB_XML_LinuxNewline",
  "#PB_XML_MacNewline",
  "#PB_XML_MisplacedXML",
  "#PB_XML_NoCase",
  "#PB_XML_NoDeclaration",
  "#PB_XML_NoElements",
  "#PB_XML_NoMemory",
  "#PB_XML_Normal",
  "#PB_XML_NotStandalone",
  "#PB_XML_NotSuspended",
  "#PB_XML_ParamEntityRef",
  "#PB_XML_PartialCharacter",
  "#PB_XML_PublicID",
  "#PB_XML_ReFormat",
  "#PB_XML_ReIndent",
  "#PB_XML_RecursiveEntityRef",
  "#PB_XML_ReduceNewline",
  "#PB_XML_ReduceSpace",
  "#PB_XML_ReservedNamespaceURI",
  "#PB_XML_ReservedPrefixXML",
  "#PB_XML_ReservedPrefixXMLNS",
  "#PB_XML_Root",
  "#PB_XML_StandaloneNo",
  "#PB_XML_StandaloneUnset",
  "#PB_XML_StandaloneYes",
  "#PB_XML_StreamEnd",
  "#PB_XML_StreamNext",
  "#PB_XML_StreamStart",
  "#PB_XML_StringFormat",
  "#PB_XML_Success",
  "#PB_XML_Suspended",
  "#PB_XML_SuspendedPE",
  "#PB_XML_Syntax",
  "#PB_XML_TagMismatch",
  "#PB_XML_TextDeclaration",
  "#PB_XML_UnboundPrefix",
  "#PB_XML_UnclosedCDataSection",
  "#PB_XML_UnclosedToken",
  "#PB_XML_UndeclaringPrefix",
  "#PB_XML_UndefinedEntity",
  "#PB_XML_UnexpectedState",
  "#PB_XML_UnknownEncoding",
  "#PB_XML_WindowsNewline",
  "#PB_XML_XMLDeclaration",
  "#PB_Xml_Normal",
  "#PB_Xml_Root",
];

export const PB_FUNCTIONS: PBFunction[] = [
  // ── 2DDrawing ───────────────────────────────────────
  {
    name: "Red",
    signature: "Result = Red(Color)",
    documentation: "Returns the red component of a color value.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "Green",
    signature: "Result = Green(Color)",
    documentation: "Returns the green component of a color value.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "Blue",
    signature: "Result = Blue(Color)",
    documentation: "Returns the blue component of a color value.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "Alpha",
    signature: "Result = Alpha(Color)",
    documentation: "Returns the alpha component of a color value.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "RGB",
    signature: "Color = RGB(Red, Green, Blue)",
    documentation:
      "Returns the 24-bit color value corresponding to the Red, Green, Blue components.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "RGBA",
    signature: "Color.q = RGBA(Red, Green, Blue, Alpha)",
    documentation:
      "Returns the 32-bit color value corresponding to the Red, Green, Blue and Alpha values.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "AlphaBlend",
    signature: "Color = AlphaBlend(Color1, Color2)",
    documentation:
      "Returns the resulting 32-bit color from blending the two 32-bit colors.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "BackColor",
    signature: "BackColor(Color)",
    documentation:
      "Set the default background color for graphic functions and text display.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "Box",
    signature: "Box(x, y, Width, Height [, Color])",
    documentation:
      "Draw a box of given dimensions on the current output. The filling mode is determined by DrawingMode() . The current output is set with StartDrawing() .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "RoundBox",
    signature: "RoundBox(x, y, Width, Height, RoundX, RoundY [, Color])",
    documentation:
      "Draw a box of the given dimensions with rounded corners on the current output. The filling mode is determined by DrawingMode() . The current output is set with StartDrawing() .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "Circle",
    signature: "Circle(x, y, Radius [, Color])",
    documentation:
      "Draw a circle on the current output. The filling mode is determined by DrawingMode() . The current output is set with StartDrawing() .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "DrawImage",
    signature: "DrawImage(ImageID, x, y [, Width, Height])",
    documentation:
      "Draws an image to the current drawing output. The filling mode is determined by DrawingMode() . The current output is set with StartDrawing() .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "DrawAlphaImage",
    signature: "DrawAlphaImage(ImageID, x, y [, ConstAlpha])",
    documentation:
      "Draws an image to the current drawing output using alpha-blending. The filling mode is determined by DrawingMode() . The current output is set with StartDrawing() .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "DrawingBuffer",
    signature: "*Buffer = DrawingBuffer()",
    documentation: "Returns the drawing buffer for direct pixel manipulation.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "DrawingBufferPitch",
    signature: "Result = DrawingBufferPitch()",
    documentation:
      "Returns the real length of one line of the current drawing buffer.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "DrawingBufferPixelFormat",
    signature: "Result = DrawingBufferPixelFormat()",
    documentation: "Returns the pixel format of the current output.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "DrawingFont",
    signature: "DrawingFont(FontID)",
    documentation:
      "Sets the font to be used for text rendering on the current output.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "DrawingMode",
    signature: "DrawingMode(Mode)",
    documentation: "Change the drawing mode for text and graphics output.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "DrawRotatedText",
    signature: "DrawRotatedText(x.d, y.d, Text$, Angle.f [, Color])",
    documentation:
      "Displays the given text on the current output at the given angle. To have gadget-like text output, the drawing mode #PB_2DDrawing_NativeText can be used.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "FillArea",
    signature: "FillArea(x, y, OutlineColor [, FillColor])",
    documentation:
      "Fill an arbitrary area starting from x,y position until the OutlineColor is encountered. This is useful for filling any kind of shape.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "GrabDrawingImage",
    signature: "Result = GrabDrawingImage(#Image, x, y, Width, Height)",
    documentation:
      "Create a new image with the content of the given area in the current output.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "StartDrawing",
    signature: "Result = StartDrawing(OutputID)",
    documentation:
      "Change the current drawing output to the specified output. After setting this, all drawing functions are rendered to this output.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "DrawText",
    signature:
      "Result.d = DrawText(x.d, y.d, Text$ [, FrontColor [, BackColor]])",
    documentation:
      "Display the given string on the current output at the given x,y position. The current output is set with StartDrawing() . To have gadget-like text output, the drawing mode #PB_2DDrawing_NativeText can be used.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "Ellipse",
    signature: "Ellipse(x, y, RadiusX, RadiusY [, Color])",
    documentation:
      "Draw an ellipse in the current drawing output. The filling mode is determined by DrawingMode() . The current output is set with StartDrawing() .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "FrontColor",
    signature: "FrontColor(Color)",
    documentation:
      "Set the default color for graphic functions and text display.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "Line",
    signature: "Line(x, y, Width, Height [, Color])",
    documentation:
      "Draw a line of given dimensions on the current output. The current output is set with StartDrawing() .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "LineXY",
    signature: "LineXY(x1, y1, x2, y2 [, Color])",
    documentation:
      "Draw a line using the location of the start- and endpoint on the current output. The current output is set with StartDrawing() .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "Plot",
    signature: "Plot(x, y [, Color])",
    documentation:
      "Draw a single pixel at the given location in the current output. The current output is set with StartDrawing() .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "Point",
    signature: "Color = Point(x, y)",
    documentation: "Return the color of a pixel in the current output.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "StopDrawing",
    signature: "StopDrawing()",
    documentation:
      "Once all the needed graphics operations (started with StartDrawing() ) have been performed, this function must be called to finish the drawing and free all associated resources.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "TextHeight",
    signature: "Height.d = TextHeight(Text$)",
    documentation:
      "Return the height of the given string in the current output using the current font.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "TextWidth",
    signature: "Width.d = TextWidth(Text$)",
    documentation:
      "Return the width of the given string in the current output using the current font.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "OutputDepth",
    signature: "Result = OutputDepth()",
    documentation: "Returns the color depth of the current drawing output.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "OutputWidth",
    signature: "Result = OutputWidth()",
    documentation: "Returns the width of the current drawing output.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "OutputHeight",
    signature: "Result = OutputHeight()",
    documentation: "Returns the height of the current drawing output.",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "CustomFilterCallback",
    signature: "CustomFilterCallback(@FilterCallback())",
    documentation:
      "Specifies a callback that will be called for every pixel that is part of a drawing operation in #PB_2DDrawing_CustomFilter drawing mode .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "GradientColor",
    signature: "GradientColor(Position.f, Color)",
    documentation:
      "Adds the given Color at the given Position to the spectrum of the drawing gradient.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "ResetGradientColors",
    signature: "ResetGradientColors()",
    documentation:
      "Removes all colors from the drawing gradient and reverts back to a gradient from the current background color to the current front color .",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "LinearGradient",
    signature: "LinearGradient(x1, y1, x2, y2)",
    documentation:
      "Sets the drawing gradient to have a linear shape defined by the two points x1,y1 and x2,y2.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "CircularGradient",
    signature: "CircularGradient(x, y, Radius)",
    documentation: "Sets the drawing gradient to have a circular shape.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "EllipticalGradient",
    signature: "EllipticalGradient(x, y, RadiusX, RadiusY)",
    documentation: "Sets the drawing gradient to have an elliptical shape.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "BoxedGradient",
    signature: "BoxedGradient(x, y, Width, Height)",
    documentation: "Sets the drawing gradient to have a box shape.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "ConicalGradient",
    signature: "ConicalGradient(x, y, Angle.f)",
    documentation: "Sets the drawing gradient to have a conical shape.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "CustomGradient",
    signature: "CustomGradient(@GradientCallback())",
    documentation:
      "Sets the drawing gradient to have a custom shape, defined by the given callback procedure.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "SetOrigin",
    signature: "SetOrigin(x, y)",
    documentation:
      "Set an offset at which all drawing in the current output takes place. This defines the location of the coordinates (0, 0) within the output for every following drawing command. By default, the origin is located in the upper left corner of the drawing output.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "GetOriginX",
    signature: "Result = GetOriginX()",
    documentation:
      "Get the X coordinate of the drawing origin that was set using SetOrigin() .",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "GetOriginY",
    signature: "Result = GetOriginY()",
    documentation:
      "Get the Y coordinate of the drawing origin that was set using SetOrigin() .",
    category: "2DDrawing",
    returnType: "i",
  },
  {
    name: "ClipOutput",
    signature: "ClipOutput(x, y, Width, Height)",
    documentation:
      "Define a bounding box that restricts all drawing to the current drawing output. Any pixels drawn outside of this box will be clipped.",
    category: "2DDrawing",
    returnType: "",
  },
  {
    name: "UnclipOutput",
    signature: "UnclipOutput()",
    documentation:
      "Remove any clipping imposed by the ClipOutput() command. The following drawing commands will be able to draw to the entire drawing output again.",
    category: "2DDrawing",
    returnType: "",
  },
  // ── Array ───────────────────────────────────────
  {
    name: "ArraySize",
    signature: "Result = ArraySize(Array() [, Dimension])",
    documentation:
      "Returns the size of the array, as specified with Dim or ReDim.",
    category: "Array",
    returnType: "i",
  },
  {
    name: "CompareArray",
    signature: "Result = CompareArray(Array1(), Array2() [, Flags])",
    documentation:
      "Compare each elements of the two arrays for equality. Recursively compares also contents of structured arrays with dynamic elements (such as embedded arrays, lists or maps). The two arrays are considered the equal if they have the same type and dimensions and if each pair of elements is equal.",
    category: "Array",
    returnType: "i",
  },
  {
    name: "CopyArray",
    signature: "Result = CopyArray(SourceArray(), DestinationArray())",
    documentation:
      "Copy every element of ’SourceArray()’ into ’DestinationArray()’. After a successful copy, the two arrays are identical. The arrays must have the same number of dimensions.",
    category: "Array",
    returnType: "i",
  },
  {
    name: "FreeArray",
    signature: "FreeArray(Array())",
    documentation:
      "Freethespecified’Array()’andreleaseallitsassociatedmemory. ToaccessitagainDimhastobecalled.",
    category: "Array",
    returnType: "",
  },
  // ── AudioCD ───────────────────────────────────────
  {
    name: "AudioCDLength",
    signature: "Result = AudioCDLength()",
    documentation: "Returns the total length of an entire audio CD.",
    category: "AudioCD",
    returnType: "i",
  },
  {
    name: "AudioCDName",
    signature: "Result\\$ = AudioCDName()",
    documentation:
      "Returns the system-dependent name associated with the current audio CD drive.",
    category: "AudioCD",
    returnType: "",
  },
  {
    name: "AudioCDTrackLength",
    signature: "Result = AudioCDTrackLength(TrackNumber)",
    documentation: "Returns the length of the specified track.",
    category: "AudioCD",
    returnType: "i",
  },
  {
    name: "AudioCDStatus",
    signature: "Result = AudioCDStatus()",
    documentation: "Returns the actual state of the current audio CD drive.",
    category: "AudioCD",
    returnType: "i",
  },
  {
    name: "AudioCDTracks",
    signature: "Result = AudioCDTracks()",
    documentation:
      "Return the total number of tracks on the CD available to be played.",
    category: "AudioCD",
    returnType: "i",
  },
  {
    name: "AudioCDTrackSeconds",
    signature: "Result = AudioCDTrackSeconds()",
    documentation:
      "Return the number of seconds elapsed since the current track began to play.",
    category: "AudioCD",
    returnType: "i",
  },
  {
    name: "EjectAudioCD",
    signature: "EjectAudioCD(State)",
    documentation: "Eject (open) or close the current CD drive.",
    category: "AudioCD",
    returnType: "",
  },
  {
    name: "InitAudioCD",
    signature: "Result = InitAudioCD()",
    documentation:
      "Try to initialize all the necessary resources in order to handle audio CD playback.",
    category: "AudioCD",
    returnType: "i",
  },
  {
    name: "PauseAudioCD",
    signature: "PauseAudioCD()",
    documentation:
      "Pause audio CD playback. The playback may be resumed by using the ResumeAudioCD() function.",
    category: "AudioCD",
    returnType: "",
  },
  {
    name: "PlayAudioCD",
    signature: "PlayAudioCD(StartTrack, EndTrack)",
    documentation:
      "Start to play the audio CD from ’StartTrack’ until the end of ’EndTrack’.",
    category: "AudioCD",
    returnType: "",
  },
  {
    name: "ResumeAudioCD",
    signature: "ResumeAudioCD()",
    documentation:
      "Resume audio CD playback, previously paused by the use of the PauseAudioCD() function.",
    category: "AudioCD",
    returnType: "",
  },
  {
    name: "StopAudioCD",
    signature: "StopAudioCD()",
    documentation: "Stop audio CD playback.",
    category: "AudioCD",
    returnType: "",
  },
  {
    name: "UseAudioCD",
    signature: "UseAudioCD(AudioCDDrive)",
    documentation:
      "Select the Drive to which the following AudioCD commands apply. It is possible to play several CDs at the same time.",
    category: "AudioCD",
    returnType: "",
  },
  // ── Billboard ───────────────────────────────────────
  {
    name: "AddBillboard",
    signature: "Result = AddBillboard(#BillboardGroup, x, y, z)",
    documentation:
      "Adds a billboard to the specified billboard group at the given position, relative to the position of the billboard group. The billboard group must have previously been created using the CreateBillboardGroup() function.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "BillboardGroupID",
    signature: "BillboardGroupID = BillboardGroupID(#BillboardGroup)",
    documentation:
      "Returns the unique ID which identifies the given ’#BillboardGroup’ in the operating system. This function is very useful when another library needs a billboard-group reference.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "BillboardGroupMaterial",
    signature: "BillboardGroupMaterial(#BillboardGroup, MaterialID)",
    documentation:
      "Assigns a material to the specified billboard group. This material will be used by all the billboards added to this group. A group can only have one material assigned at any point in time.",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "BillboardGroupX",
    signature: "Result = BillboardGroupX(#BillboardGroup [, Mode])",
    documentation:
      "Determines the absolute position of the billboard group in the world.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "BillboardGroupY",
    signature: "Result = BillboardGroupY(#BillboardGroup [, Mode])",
    documentation:
      "Determines the absolute position of the billboard group in the world.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "BillboardGroupZ",
    signature: "Result = BillboardGroupZ(#BillboardGroup [, Mode])",
    documentation:
      "Determines the absolute position of the billboard group in the world.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "BillboardHeight",
    signature: "Result = BillboardHeight(#Billboard, #BillboardGroup)",
    documentation:
      "Determines the height of a billboard which has been added to a billboard group. The height is measured in the units used by the world.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "BillboardLocate",
    signature: "BillboardLocate(#Billboard, #BillboardGroup, x, y, z)",
    documentation:
      "Moves a billboard to a new location within the billboard group which is it added to. The position to move to is relative to the position of the billboard group. Use the MoveBillboard() function to move a billboard relative to its own coordinates.",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "BillboardWidth",
    signature: "Result = BillboardWidth(#Billboard, #BillboardGroup)",
    documentation:
      "Determines the width of a billboard which has been added to a billboard group. The width is measured in the units used by the world.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "BillboardX",
    signature: "Result = BillboardX(#Billboard, #BillboardGroup)",
    documentation:
      "Returns the position of the billboard, relative to the position of the group which it is in.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "BillboardY",
    signature: "Result = BillboardY(#Billboard, #BillboardGroup)",
    documentation:
      "Returns the position of the billboard, relative to the position of the group which it is in.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "BillboardZ",
    signature: "Result = BillboardZ(#Billboard, #BillboardGroup)",
    documentation:
      "Returns the position of the billboard, relative to the position of the group which it is in.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "ClearBillboards",
    signature: "ClearBillboards(#BillboardGroup)",
    documentation:
      "Removes and destroys all billboards in the specified billboard group.",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "CountBillboards",
    signature: "Result = CountBillboards(#BillboardGroup)",
    documentation:
      "Counts the number of billboards contained in a billboard group.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "CreateBillboardGroup",
    signature: "Result = CreateBillboardGroup(#BillboardGroup, MaterialID,",
    documentation: "Creates a new empty billboard group.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "BillboardGroupCommonDirection",
    signature: "BillboardGroupCommonDirection(#BillboardGroup, x, y, z)",
    documentation: "Changes the billboard common direction.",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "BillboardGroupCommonUpVector",
    signature: "BillboardGroupCommonUpVector(#BillboardGroup, x, y, z)",
    documentation: "Changes the billboard common up vector.",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "FreeBillboardGroup",
    signature: "FreeBillboardGroup(#BillboardGroup)",
    documentation:
      "Frees the specified billboard group and any billboards contained within it. All its associated memory is released and this object cannot be used anymore.",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "HideBillboardGroup",
    signature: "HideBillboardGroup(#BillboardGroup, State)",
    documentation:
      "Changes the visibility of (hides or shows) a billboard group and any billboards it contains.",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "IsBillboardGroup",
    signature: "Result = IsBillboardGroup(#BillboardGroup)",
    documentation:
      "Tests if the given billboard group number is a valid and correctly initialized billboard group.",
    category: "Billboard",
    returnType: "i",
  },
  {
    name: "MoveBillboard",
    signature: "MoveBillboard(#Billboard, #BillboardGroup, x, y, z)",
    documentation:
      "Moves a billboard which is contained in a billboard group by the specified x, y and z values. This is a relative move based on the current location of the billboard. To perform an absolute move (actually, relative to the coordinates of the billboard group) use BillboardLocate() .",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "MoveBillboardGroup",
    signature: "MoveBillboardGroup(#BillboardGroup, x, y, z [, Mode])",
    documentation:
      "Moves a billboard group by the specified x, y and z values. This is by default a relative move, based on the current location of the billboard group.",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "RemoveBillboard",
    signature: "RemoveBillboard(#Billboard, #BillboardGroup)",
    documentation: "Removes a billboard from the specified billboard group.",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "ResizeBillboard",
    signature: "ResizeBillboard(#Billboard, #BillboardGroup, Width, Height)",
    documentation:
      "Resizes a billboard, which is currently contained in a billboard group, to a new width and height, specified in world units. Note that although you can resize billboards independently with this function there will be some performance lost if the billboards within a billboard group are all different sizes.",
    category: "Billboard",
    returnType: "",
  },
  {
    name: "RotateBillboardGroup",
    signature: "RotateBillboardGroup(#BillboardGroup, x, y, z [, Mode])",
    documentation:
      "Rotates the #BillboardGroup according to the specified x, y, z angle values.",
    category: "Billboard",
    returnType: "",
  },
  // ── CGI ───────────────────────────────────────
  {
    name: "CGICookieName",
    signature: "Result\\$ = CGICookieName(Index)",
    documentation: "Returns the name of the specified cookie.",
    category: "CGI",
    returnType: "",
  },
  {
    name: "CGICookieValue",
    signature: "Result\\$ = CGICookieValue(Name$)",
    documentation: "Returns the value of the specified cookie.",
    category: "CGI",
    returnType: "",
  },
  {
    name: "CountCGICookies",
    signature: "Result = CountCGICookies()",
    documentation:
      "Returns the number of available cookies. The cookies are small persistent files stored in the web browser to allow to remember a context and ease future navigation when loading the same page later on. Please note than European legislation now impose to inform users that cookies are not being used to gather",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "CountCGIParameters",
    signature: "Result = CountCGIParameters()",
    documentation:
      "Returns the number of available parameters from GET or POST requests.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "CGIParameterName",
    signature: "Result = CGIParameterName(Index)",
    documentation: "Returns the name of the specified parameter.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "CGIParameterValue",
    signature: "Result = CGIParameterValue(Name$ [, Index])",
    documentation: "Returns the value of the specified parameter.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "CGIParameterType",
    signature: "Result = CGIParameterType(Name$ [, Index])",
    documentation: "Returns the type of the specified parameter.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "CGIParameterData",
    signature: "*Result = CGIParameterData(Name$ [, Index])",
    documentation:
      "Returns the memory buffer address of the specified parameter data.",
    category: "CGI",
    returnType: "",
  },
  {
    name: "CGIParameterDataSize",
    signature: "Result = CGIParameterDataSize(Name$ [, Index])",
    documentation: "Returns the size of the specified parameter data size.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "CGIBuffer",
    signature: "*Result = CGIBuffer()",
    documentation:
      "For advanced users. Returns the memory buffer address of the raw CGI input (only useful for POST request type). It can be useful to do extra parsing not supported by this library while still using other commands. The size of the buffer is the value returned by ReadCGI() .",
    category: "CGI",
    returnType: "",
  },
  {
    name: "CGIVariable",
    signature: "Result\\$ = CGIVariable(Name$)",
    documentation:
      "Gets the specified CGI environment variable content. When the CGI is loaded, many information are sent from the web server to the CGI application through environment variables.",
    category: "CGI",
    returnType: "",
  },
  {
    name: "FinishFastCGIRequest",
    signature: "FinishFastCGIRequest()",
    documentation:
      "Finish the current FastCGI request and free all resources associated to it. It’s not mandatory to use this command, as the request will be automatically finished when WaitFastCGIRequest() () is called again, or when the thread ends. It can still be useful in some special case where resources are light before doing",
    category: "CGI",
    returnType: "",
  },
  {
    name: "InitCGI",
    signature: "Result = InitCGI([MaxRequestSize])",
    documentation:
      "Initializes the CGI environment. This function has to be called successfully before using any other commands of this library.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "InitFastCGI",
    signature: "Result = InitFastCGI(LocalPort [, BoundIP$])",
    documentation:
      "Initializes FastCGI support. Once called, all the CGI commands switch automatically to FastCGI support. This library support threaded FastCGI processing, when enabling the ’thread-mode’ in PureBasic. FastCGI support is only supported through a local socket. InitCGI() needs to be called",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "ReadCGI",
    signature: "Result = ReadCGI()",
    documentation:
      "Reads the CGI request input. InitCGI() has to be called successfully before trying to the read the CGI input.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "WriteCGIFile",
    signature: "Result = WriteCGIFile(Filename$)",
    documentation:
      "Writes a whole file to the CGI output. When sending binary data, the ’content-type’ header should be set to ’application/octet-stream’.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "WriteCGIData",
    signature: "Result = WriteCGIData(*Buffer, Size)",
    documentation:
      "Writes binary data to the CGI output. When sending binary data, the ’content-type’ header should be set to ’application/octet-stream’.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "WriteCGIHeader",
    signature: "Result = WriteCGIHeader(Header$, Value$ [, Flags])",
    documentation:
      "Writes a header to the CGI output. The headers needs to be written before any other data.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "WriteCGIString",
    signature: "Result = WriteCGIString(String$ [, Encoding])",
    documentation: "Write a string to the CGI output.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "WriteCGIStringN",
    signature: "Result = WriteCGIStringN(String$ [, Encoding])",
    documentation:
      "Write a string to the CGI output, including a carriage return.",
    category: "CGI",
    returnType: "i",
  },
  {
    name: "WaitFastCGIRequest",
    signature: "Result = WaitFastCGIRequest()",
    documentation:
      "Waits for a new incoming request. This command will halt the program execution until a new request is available. InitFastCGI() needs to be called successfully before using this command.",
    category: "CGI",
    returnType: "i",
  },
  // ── Camera ───────────────────────────────────────
  {
    name: "CameraBackColor",
    signature: "CameraBackColor(#Camera, Color)",
    documentation:
      "Changes the camera background color. When a new camera is created, the default background color is set to black.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CameraFollow",
    signature: "CameraFollow(#Camera, ObjectID, Angle, Height, Distance,",
    documentation:
      "Follow the specified object in a smooth manner, using interpolation.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CameraFOV",
    signature: "CameraFOV(#Camera, Angle)",
    documentation:
      "Changes a camera field of vision (FOV) which allows you to view a larger or smaller area of the scene. Angles above 90 degrees result in a wide-angle (fish-eye like) view. Angles lower than 30 degrees result in a stretched (telescopic) view. Typical values are between 45 and 60 degrees.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CameraID",
    signature: "CameraID = CameraID(#Camera)",
    documentation:
      "Returns the unique ID which identifies the given ’#Camera’ in the operating system. This function is very useful when another library needs a camera reference.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraCustomParameter",
    signature:
      "CameraCustomParameter(#Camera, ParameterIndex, Value1, Value2, Value3,",
    documentation:
      "Sets a custom parameter value to the camera shader script (either GLSL or HLSL).",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CheckObjectVisibility",
    signature: "Result = CheckObjectVisibility(#Camera, ObjectID)",
    documentation: "Checks if an object is visible within a camera view.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraDirection",
    signature: "CameraDirection(#Camera, x, y, z)",
    documentation:
      "Changes the direction of a camera. The position of the camera is not changed.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CameraDirectionX",
    signature: "Result = CameraDirectionX(#Camera [, Mode])",
    documentation: "Returns the ’x’ direction vector of the camera.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraDirectionY",
    signature: "Result = CameraDirectionY(#Camera [, Mode])",
    documentation: "Returns the ’y’ direction vector of the camera.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraDirectionZ",
    signature: "Result = CameraDirectionZ(#Camera [, Mode])",
    documentation: "Returns the ’z’ direction vector of the camera.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraFixedYawAxis",
    signature:
      "CameraFixedYawAxis(#Camera, Enable [, VectorX, VectorY, VectorZ])",
    documentation:
      "Change the fixed yaw axis of the camera. The default behaviour of a camera is to yaw around its own Y axis.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CameraLookAt",
    signature: "CameraLookAt(#Camera, x, y, z)",
    documentation: "The point (in world unit) that a camera will face.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CameraProjectionMode",
    signature: "CameraProjectionMode(#Camera, Mode [, Width, Height])",
    documentation: "Change the #Camera projection mode.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CameraProjectionX",
    signature: "Result = CameraProjectionX(#Camera, x, y, z)",
    documentation:
      "Returns the ’x’ position, in pixels, of a 3D point on the specified #Camera. If the point is outside of the camera current view, it returns -1. This is very useful to map 3D points to 2D screen.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraProjectionY",
    signature: "Result = CameraProjectionY(#Camera, x, y, z)",
    documentation:
      "Returns the ’y’ position, in pixels, of a 3D point on the specified #Camera. If the point is outside of the camera current view, it returns -1. This is very useful to map 3D points to 2D screen.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraRange",
    signature: "CameraRange(#Camera, Near, Far)",
    documentation: "Changes camera near and far range.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CameraRenderMode",
    signature: "CameraRenderMode(#Camera, RenderMode)",
    documentation:
      "Changes the mode in which the world is displayed through a camera. When you create a new camera, using the CreateCamera() function, the default render mode is to display the world with full details and textures.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CameraReflection",
    signature: "CameraReflection(#Camera, #MainCamera, EntityID)",
    documentation:
      "Set the #Camera as a reflective camera, using #MainCamera and the EntityID as source. A RTT Texture has to be created from #Camera using CreateRenderTexture() . The material which will use this RTT texture has to be defined with SetMaterialAttribute(Material,",
    category: "Camera",
    returnType: "",
  },
  {
    name: "CameraRoll",
    signature: "Result = CameraRoll(#Camera [, Mode])",
    documentation: "Get the roll of the #Camera.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraPitch",
    signature: "Result = CameraPitch(#Camera [, Mode])",
    documentation: "Get the pitch of the #Camera.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraYaw",
    signature: "Result = CameraYaw(#Camera [, Mode])",
    documentation: "Get the yaw of the #Camera.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraViewX",
    signature: "Result = CameraViewX(#Camera)",
    documentation:
      "Returns the ’x’ position (in pixels) of the camera frame in the screen.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraViewY",
    signature: "Result = CameraViewY(#Camera)",
    documentation:
      "Returns the ’y’ position (in pixels) of the camera frame in the screen.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraViewWidth",
    signature: "Result = CameraViewWidth(#Camera)",
    documentation:
      "Returns the width (in pixels) of the camera frame in the screen.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraViewHeight",
    signature: "Result = CameraViewHeight(#Camera)",
    documentation:
      "Returns the height (in pixels) of the camera frame in the screen.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraX",
    signature: "Result = CameraX(#Camera [, Mode])",
    documentation:
      "Returns the current ’x’ position of the camera in the world.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraY",
    signature: "Result = CameraY(#Camera [, Mode])",
    documentation:
      "Returns the current ’y’ position of the camera in the world.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CameraZ",
    signature: "Result = CameraZ(#Camera [, Mode])",
    documentation: "Returns the current position of the camera in the world.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "CreateCamera",
    signature:
      "Result = CreateCamera(#Camera, x, y, Width, Height [, VisibilityMask [,",
    documentation:
      "Creates a new camera in the current world, at the position x,y with the specified dimensions. Note that these positions and sizes are the position and sizes of the display on the screen, not the position and size of the camera in the world.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "FreeCamera",
    signature: "FreeCamera(#Camera)",
    documentation:
      "Frees a camera and releases all its associated memory. This camera must not be used (by using its number with the other functions in this library) after calling this function, unless you create it again.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "IsCamera",
    signature: "Result = IsCamera(#Camera)",
    documentation:
      "Tests if the given #Camera is a valid and correctly initialized camera. This function is bulletproof and can be used with any value. If the ’Result’ is not zero then the object is valid and initialized, else it returns zero. This is the correct way to ensure a camera is ready to use.",
    category: "Camera",
    returnType: "i",
  },
  {
    name: "MoveCamera",
    signature: "MoveCamera(#Camera, x, y, z [, Mode])",
    documentation: "Move the specified camera.",
    category: "Camera",
    returnType: "",
  },
  {
    name: "ResizeCamera",
    signature: "ResizeCamera(#Camera, x, y, Width, Height)",
    documentation:
      "Resizes the camera according to the specified dimension. All values are in percentages, like with CreateCamera() .",
    category: "Camera",
    returnType: "",
  },
  {
    name: "RotateCamera",
    signature: "RotateCamera(#Camera, x, y, z [, Mode])",
    documentation:
      "Rotates the camera according to the specified x,y,z angle values.",
    category: "Camera",
    returnType: "",
  },
  // ── Cipher ───────────────────────────────────────
  {
    name: "AddCipherBuffer",
    signature: "AddCipherBuffer(#Cipher, *Input, *Output, Size)",
    documentation:
      "Add new data to the cipher started with StartAESCipher() and copy the ciphered data into the output buffer.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "AESEncoder",
    signature: "Result = AESEncoder(*Input, *Output, Size, *Key, Bits,",
    documentation:
      "Encodes the specified input buffer using the AES algorithm into the output buffer.",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "AESDecoder",
    signature: "Result = AESDecoder(*Input, *Output, Size, *Key, Bits,",
    documentation:
      "Decodes the specified input buffer using the AES algorithm into the output buffer.",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "CreatePasswordHash",
    signature: "Result\\$ = CreatePasswordHash(Password$ [, WorkFactor])",
    documentation:
      "Creates a hash digest of a password for storage and later verification of a password. It is not possible to recover the input password from the hash value, but passwords can be verified to see if they match the hash using VerifyPasswordHash() later.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "VerifyPasswordHash",
    signature: "Result = VerifyPasswordHash(Password$, Hash$)",
    documentation:
      "Checks if a given password matches the hash value previously created with CreatePasswordHash() .",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "DESFingerprint",
    signature: "Result\\$ = DESFingerprint(Password$, Key$)",
    documentation:
      "Warning This function is deprecated, it may be removed in a future version of PureBasic. It should not be used in newly written code. Returns a DES encrypted version of the given Password$. This command is deprecated because it is no",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "DeriveCipherKey",
    signature:
      "Result = DeriveCipherKey(Password$, Salt$, Iterations, *Key, KeyBits,",
    documentation:
      "Creates a cypher key with the specified number of bits from an input password for use in other cypher functions like encryption or decryption. This function implements the PBKDF2 key derivation algorithm.",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "StartFingerprint",
    signature:
      "Result = StartFingerprint(#Fingerprint, Plugin [, Bits [, HmacKey$ [,",
    documentation:
      "Initializes the calculation of a fingerprint in several steps. Unlike Fingerprint() function this allows to calculate the fingerprint of large data without the need to load it all into one continuous memory buffer.",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "FinishCipher",
    signature: "FinishCipher(#Cipher)",
    documentation:
      "Finish a cipher stream previously started with StartAESCipher() .",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "IsCipher",
    signature: "Result = IsCipher(#Cipher)",
    documentation:
      "Tests if the given #Cipher number is a valid and correctly initialized cipher.",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "AddFingerprintBuffer",
    signature: "AddFingerprintBuffer(#Fingerprint, *Buffer, Size)",
    documentation:
      "Add a new memory buffer into the calculation of a checksum started by StartFingerprint() . The checksum returned at the end of the calculation will include all the added buffers as if the checksum was calculated with all of them in one continuous memory buffer.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "FinishFingerprint",
    signature: "Result\\$ = FinishFingerprint(#Fingerprint)",
    documentation:
      "Finishes the calculation of a fingerprint started by StartFingerprint() and returns it as an hexadecimal string.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "IsFingerprint",
    signature: "Result = IsFingerprint(#Fingerprint)",
    documentation:
      "Tests if the given #Fingerprint is a valid fingerprint calculation created by StartFingerprint() .",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "FileFingerprint",
    signature:
      "Result\\$ = FileFingerprint(Filename$, Plugin [, Bits [, Offset [,",
    documentation: "Returns a fingerprint for the specified file.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "Fingerprint",
    signature:
      "Result\\$ = Fingerprint(*Buffer, Size, Plugin [, Bits [, HmacKey$ [,",
    documentation: "Returns a fingerprint for the given buffer.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "StringFingerprint",
    signature:
      "Result\\$ = StringFingerprint(String$, Plugin [, Bits [, Format[,",
    documentation: "Returns a fingerprint for the given string.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "UseMD5Fingerprint",
    signature: "UseMD5Fingerprint()",
    documentation: "Register the MD5 fingerprint plugin for future use.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "UseSHA1Fingerprint",
    signature: "UseSHA1Fingerprint()",
    documentation: "Register the SHA1 fingerprint plugin for future use.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "UseSHA2Fingerprint",
    signature: "UseSHA2Fingerprint()",
    documentation:
      "Register the SHA2 fingerprint plugin for future use. The standard 224-bit, 256-bit, 384-bit and 512-bit variants are supported.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "UseSHA3Fingerprint",
    signature: "UseSHA3Fingerprint()",
    documentation:
      "Register the SHA3 fingerprint plugin for future use. The standard 224-bit, 256-bit, 384-bit and 512-bit variants are supported.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "UseCRC32Fingerprint",
    signature: "UseCRC32Fingerprint()",
    documentation: "Register the CRC32 fingerprint plugin for future use.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "Base64DecoderBuffer",
    signature:
      "Result = Base64DecoderBuffer(*InputBuffer, InputSize, *OutputBuffer,",
    documentation: "Decodes the specified Base64 encoded buffer.",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "Base64EncoderBuffer",
    signature:
      "Result = Base64EncoderBuffer(*InputBuffer, InputSize, *OutputBuffer,",
    documentation:
      "Encodes the specified buffer using the Base64 algorithm. This is widely used in e-mail programs but can be useful for any other programs which need an ASCII only (7 bit, only from 32 to 127 characters) encoding for raw binary files.",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "Base64Decoder",
    signature: "Result = Base64Decoder(Input$, *OutputBuffer, OutputSize)",
    documentation: "Decodes the specified Base64 encoded string.",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "Base64Encoder",
    signature: "Result\\$ = Base64Encoder(*InputBuffer, InputSize [, Flags])",
    documentation:
      "Encodes the specified buffer using the Base64 algorithm. This is widely used in e-mail programs but can be useful for any other programs which need an ASCII only (7 bit, only from 32 to 127 characters) encoding for raw binary files.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "StartAESCipher",
    signature:
      "Result = StartAESCipher(#Cipher, *Key, Bits, *InitializationVector,",
    documentation:
      "Initializes a new AES cipher stream where data can be added using AddCipherBuffer() .",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "OpenCryptRandom",
    signature: "Result = OpenCryptRandom()",
    documentation:
      "Opens the cryptographic safe pseudorandom number generator. The CryptRandom() and CryptRandomData() commands can be used to read data from the opened generator.",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "CloseCryptRandom",
    signature: "CloseCryptRandom()",
    documentation:
      "Closes the cryptographic safe pseudorandom number generator that was opened with OpenCryptRandom() and frees its resources.",
    category: "Cipher",
    returnType: "",
  },
  {
    name: "CryptRandom",
    signature: "Result = CryptRandom(Maximum)",
    documentation:
      "Returns a random number (integer) which lies between (and including) 0 and the Maximum value from the cryptographic safe pseudorandom number generator.",
    category: "Cipher",
    returnType: "i",
  },
  {
    name: "CryptRandomData",
    signature: "Result = CryptRandomData(*Buffer, Length)",
    documentation:
      "Fills the specified memory buffer with random data from the cryptographic safe pseudorandom number generator.",
    category: "Cipher",
    returnType: "i",
  },
  // ── Clipboard ───────────────────────────────────────
  {
    name: "ClearClipboard",
    signature: "ClearClipboard()",
    documentation:
      "Clears the clipboard. This means that any data contained within the clipboard is flushed and no longer available from the clipboard.",
    category: "Clipboard",
    returnType: "",
  },
  {
    name: "GetClipboardImage",
    signature: "Result = GetClipboardImage(#Image [, Depth])",
    documentation:
      "Creates a new image from the clipboard image data (if any).",
    category: "Clipboard",
    returnType: "i",
  },
  {
    name: "GetClipboardText",
    signature: "Text\\$ = GetClipboardText()",
    documentation:
      "Returns the text string currently contained within the clipboard.",
    category: "Clipboard",
    returnType: "",
  },
  {
    name: "SetClipboardImage",
    signature: "SetClipboardImage(#Image)",
    documentation:
      "Places a copy of the given image onto the clipboard. If the clipboard currently contains an image, then it will be overwritten.",
    category: "Clipboard",
    returnType: "",
  },
  {
    name: "SetClipboardText",
    signature: "SetClipboardText(Text$)",
    documentation:
      "Stores a string into the clipboard. If the clipboard already contains text, it will be overwritten.",
    category: "Clipboard",
    returnType: "",
  },
  // ── Console ───────────────────────────────────────
  {
    name: "ClearConsole",
    signature: "ClearConsole()",
    documentation:
      "Clears the whole console content using the current background color. The background color is set with ConsoleColor() . The console has to be in graphical mode, see EnableGraphicalConsole() .",
    category: "Console",
    returnType: "",
  },
  {
    name: "CloseConsole",
    signature: "CloseConsole()",
    documentation:
      "Close the console previously opened with OpenConsole() . Once the console has been closed, it’s not possible to use any console-related functions unless you open the console again. The console will automatically be closed when your program ends. No effects with Linux and MacOS.",
    category: "Console",
    returnType: "",
  },
  {
    name: "ConsoleError",
    signature: "ConsoleError(Message$)",
    documentation:
      "Writes the Message string (plus a newline) to the standard error output of the program. This output can be read for example with the ReadProgramError() function of the Process library.",
    category: "Console",
    returnType: "",
  },
  {
    name: "ConsoleTitle",
    signature: "ConsoleTitle(Title$)",
    documentation:
      "Changes the console title to the specified string. The console title is typically shown in the title bar of the window which the console is in (when you are viewing the console in a graphical environment such as your desktop).",
    category: "Console",
    returnType: "",
  },
  {
    name: "ConsoleColor",
    signature: "ConsoleColor(CharacterColor, BackgroundColor)",
    documentation:
      "Change the colors used by the text display. Any characters printed after calling this function will use the new colors.",
    category: "Console",
    returnType: "",
  },
  {
    name: "EnableGraphicalConsole",
    signature: "EnableGraphicalConsole(State)",
    documentation:
      "Changes the way the characters are drawn on the console between a graphical and a text-only mode.",
    category: "Console",
    returnType: "",
  },
  {
    name: "Inkey",
    signature: "String\\$ = Inkey()",
    documentation:
      "Returns a character string if a key is pressed during the call of Inkey(). It doesn’t interrupt (halt) the program flow. If special keys (non-ASCII) have to be handled, RawKey() should be called after Inkey().",
    category: "Console",
    returnType: "",
  },
  {
    name: "Input",
    signature: "String\\$ = Input()",
    documentation:
      "Allows the program to catch an entire line of characters. This function locks the program execution and waits until the user presses the return key.",
    category: "Console",
    returnType: "",
  },
  {
    name: "ConsoleLocate",
    signature: "ConsoleLocate(x, y)",
    documentation:
      "Moves the cursor to the given position, in character coordinates. Any text you print after calling this function will start from the specified coordinates.",
    category: "Console",
    returnType: "",
  },
  {
    name: "ConsoleCursor",
    signature: "ConsoleCursor(Height)",
    documentation:
      "Changes the display of the cursor, which is the indicator used to show where the next displayed character will be drawn. This function allows you to change the height of the cursor.",
    category: "Console",
    returnType: "",
  },
  {
    name: "Print",
    signature: "Print(Text$)",
    documentation: "Displays the specified ’Text$’ in the console.",
    category: "Console",
    returnType: "",
  },
  {
    name: "PrintN",
    signature: "PrintN(Text$)",
    documentation:
      "Displays the specified ’Text$’ in the console and adds a new line.",
    category: "Console",
    returnType: "",
  },
  {
    name: "OpenConsole",
    signature: "Result = OpenConsole([Title$ [, Mode]])",
    documentation:
      "Open a console window. This function must be called before any other function of this library. Only one console can be opened at the same time in a PureBasic program.",
    category: "Console",
    returnType: "i",
  },
  {
    name: "ReadConsoleData",
    signature: "Result = ReadConsoleData(*Buffer, Size)",
    documentation:
      "Reads raw input from the console. This function is only supported in non-graphical mode. It can be used to read not line-based data, or text like files redirected to the program through a pipe.",
    category: "Console",
    returnType: "i",
  },
  {
    name: "RawKey",
    signature: "Result = RawKey()",
    documentation:
      "Returns the raw key code of the last Inkey() function call. It’s useful for extended (non-ASCII) keys (for example, function keys, arrows, etc).",
    category: "Console",
    returnType: "i",
  },
  {
    name: "WriteConsoleData",
    signature: "Result = WriteConsoleData(*Buffer, Size)",
    documentation:
      "Writes raw data to the console output. This function is only supported in non-graphical mode. It can be used to output data other than text to the console that can then be redirected to a file or another program.",
    category: "Console",
    returnType: "i",
  },
  // ── Database ───────────────────────────────────────
  {
    name: "AffectedDatabaseRows",
    signature: "Result = AffectedDatabaseRows(#Database)",
    documentation:
      "Returns the number of rows affected by the last DatabaseUpdate() operation.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "CloseDatabase",
    signature: "CloseDatabase(#Database)",
    documentation:
      "Close the specified #Database (and connections/transactions if any). No further operations are allowed on this database.",
    category: "Database",
    returnType: "",
  },
  {
    name: "DatabaseColumns",
    signature: "Result = DatabaseColumns(#Database)",
    documentation:
      "Returns the numbers of columns (fields) from the last executed database query with DatabaseQuery() .",
    category: "Database",
    returnType: "i",
  },
  {
    name: "DatabaseColumnIndex",
    signature: "Result = DatabaseColumnIndex(#Database, ColumnName$)",
    documentation:
      "Returns the index of the column after executing a query with DatabaseQuery() in the opened #Database. This can be useful for use with commands like GetDatabaseLong() which require a column index.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "DatabaseColumnName",
    signature: "Text\\$ = DatabaseColumnName(#Database, Column)",
    documentation: "Return the name of the specified column in the #Database.",
    category: "Database",
    returnType: "",
  },
  {
    name: "DatabaseColumnSize",
    signature: "Result = DatabaseColumnSize(#Database, Column)",
    documentation:
      "Return the size of the specified column in the #Database. It is especially useful when the size of the column can change depending of the records, like a blob or string column.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "DatabaseColumnType",
    signature: "Result = DatabaseColumnType(#Database, Column)",
    documentation: "Return the type of the specified column in the #Database.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "DatabaseDriverDescription",
    signature: "Text\\$ = DatabaseDriverDescription()",
    documentation:
      "Returns the description of the current database driver. Drivers are listed using the ExamineDatabaseDrivers() and NextDatabaseDriver() functions.",
    category: "Database",
    returnType: "",
  },
  {
    name: "DatabaseDriverName",
    signature: "Text\\$ = DatabaseDriverName()",
    documentation:
      "Return the name of the current database driver. Drivers are listed using the ExamineDatabaseDrivers() and NextDatabaseDriver() functions.",
    category: "Database",
    returnType: "",
  },
  {
    name: "DatabaseError",
    signature: "Error\\$ = DatabaseError()",
    documentation:
      "Returns a description of the last database error in text format. This is especially useful with the following functions: OpenDatabase() , DatabaseQuery() and DatabaseUpdate() .",
    category: "Database",
    returnType: "",
  },
  {
    name: "DatabaseID",
    signature: "DatabaseID = DatabaseID(#Database)",
    documentation:
      "Returns the unique ID which identifies the given ’#Database’ in the operating system. This function is useful when another library needs a database reference.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "DatabaseQuery",
    signature: "Result = DatabaseQuery(#Database, Request$ [, Flags])",
    documentation:
      "Executes a SQL query on the given database. Only queries which doesn’t change the database records are accepted (’SELECT’ like queries). To performs database modification, use DatabaseUpdate() .",
    category: "Database",
    returnType: "i",
  },
  {
    name: "DatabaseUpdate",
    signature: "Result = DatabaseUpdate(#Database, Request$)",
    documentation:
      "Executes a modification query on the given database. This command doesn’t return any record. To perform a ’SELECT’ like query, use DatabaseQuery() .",
    category: "Database",
    returnType: "i",
  },
  {
    name: "ExamineDatabaseDrivers",
    signature: "Result = ExamineDatabaseDrivers()",
    documentation: "Examines the database drivers available on the system.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "FinishDatabaseQuery",
    signature: "FinishDatabaseQuery(#Database)",
    documentation:
      "Finish the current database SQL query and release its associated resources. Query related functions like FirstDatabaseRow() or NextDatabaseRow() can’t be used anymore.",
    category: "Database",
    returnType: "",
  },
  {
    name: "FirstDatabaseRow",
    signature: "Result = FirstDatabaseRow(#Database)",
    documentation:
      "Retrieves information about the first #Database row. The flag #PB_Database_DynamicCursor has to be specified to DatabaseQuery() to have this command working.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "GetDatabaseBlob",
    signature:
      "Result = GetDatabaseBlob(#Database, Column, *Buffer, BufferLength)",
    documentation:
      "Returns the content of the specified database column in the specified buffer as a pointer to the blob memory. This command is only valid after a successful FirstDatabaseRow() , PreviousDatabaseRow() or NextDatabaseRow() .",
    category: "Database",
    returnType: "i",
  },
  {
    name: "GetDatabaseDouble",
    signature: "Result.d = GetDatabaseDouble(#Database, Column)",
    documentation:
      "Returns the content of the specified database column as a double precision floating-point number. This command is only valid after a successful FirstDatabaseRow() , PreviousDatabaseRow() or NextDatabaseRow() .",
    category: "Database",
    returnType: "i",
  },
  {
    name: "GetDatabaseFloat",
    signature: "Result.f = GetDatabaseFloat(#Database, Column)",
    documentation:
      "Returns the content of the specified database column as a floating-point number. This command is only valid after a successful FirstDatabaseRow() , PreviousDatabaseRow() or NextDatabaseRow() .",
    category: "Database",
    returnType: "i",
  },
  {
    name: "GetDatabaseLong",
    signature: "Result = GetDatabaseLong(#Database, Column)",
    documentation:
      "Returns the content of the specified #Database column as an integer number. This command is only valid after a successful FirstDatabaseRow() , PreviousDatabaseRow() or NextDatabaseRow() .",
    category: "Database",
    returnType: "i",
  },
  {
    name: "GetDatabaseQuad",
    signature: "Result.q = GetDatabaseQuad(#Database, Column)",
    documentation:
      "Returns the content of the specified #Database column as a quad number. This command is only valid after a successful FirstDatabaseRow() , PreviousDatabaseRow() or NextDatabaseRow() .",
    category: "Database",
    returnType: "i",
  },
  {
    name: "GetDatabaseString",
    signature: "Text\\$ = GetDatabaseString(#Database, Column)",
    documentation:
      "Returns the content of the specified #Database column as a string. This command is only valid after a successful FirstDatabaseRow() , PreviousDatabaseRow() or NextDatabaseRow() .",
    category: "Database",
    returnType: "",
  },
  {
    name: "CheckDatabaseNull",
    signature: "Result = CheckDatabaseNull(#Database, Column)",
    documentation:
      "Checks if the content of the specified database column is null. This command is only valid after a successful FirstDatabaseRow() , PreviousDatabaseRow() or NextDatabaseRow() .",
    category: "Database",
    returnType: "i",
  },
  {
    name: "IsDatabase",
    signature: "Result = IsDatabase(#Database)",
    documentation:
      "This function evaluates if the given #Database number is a valid and correctly-initialized database.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "NextDatabaseDriver",
    signature: "Result = NextDatabaseDriver()",
    documentation:
      "Retrieves information about the next available database driver. This function must be called after ExamineDatabaseDrivers() . To get information about the current driver, DatabaseDriverName() and DatabaseDriverDescription() can be used.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "NextDatabaseRow",
    signature: "Result = NextDatabaseRow(#Database)",
    documentation:
      "Retrieves information about the next database row in the #Database. To access fields within a row, GetDatabaseLong() , GetDatabaseFloat() , GetDatabaseString() can be used.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "OpenDatabase",
    signature:
      "Result = OpenDatabase(#Database, DatabaseName$, User$, Password$ [,",
    documentation: "Opens a new database connection.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "OpenDatabaseRequester",
    signature: "Result = OpenDatabaseRequester(#Database [, Plugin])",
    documentation:
      "Open the standard ODBC requester to choose which database to open.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "PreviousDatabaseRow",
    signature: "Result = PreviousDatabaseRow(#Database)",
    documentation:
      "Retrieves information about the previous database row in the #Database. The flag #PB_Database_DynamicCursor has to be specified to DatabaseQuery() to have this command working. To access to fields inside a row, GetDatabaseLong() , GetDatabaseFloat() ,",
    category: "Database",
    returnType: "i",
  },
  {
    name: "SetDatabaseBlob",
    signature:
      "SetDatabaseBlob(#Database, StatementIndex, *Buffer, BufferLength)",
    documentation: "Set the blob for future use with DatabaseUpdate() .",
    category: "Database",
    returnType: "",
  },
  {
    name: "UseMySQLDatabase",
    signature: "Result = UseMySQLDatabase([LibraryName$])",
    documentation:
      "Initialize the MySQL and MariaDB database environment for future use.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "UsePostgreSQLDatabase",
    signature: "Result = UsePostgreSQLDatabase([LibraryName$])",
    documentation:
      "Initialize the PostgreSQL database environment for future use.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "UseSQLiteDatabase",
    signature: "Result = UseSQLiteDatabase([LibraryName$])",
    documentation: "Initialize the SQLite database environment for future use.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "UseODBCDatabase",
    signature: "Result = UseODBCDatabase()",
    documentation:
      "Initialize the ODBC database environment for future use. It attempts to load the ODBC driver and allocate the required resources.",
    category: "Database",
    returnType: "i",
  },
  {
    name: "SetDatabaseString",
    signature: "SetDatabaseString(#Database, StatementIndex, Value$)",
    documentation:
      "Set a string as a bind variable for the next call to DatabaseQuery() or DatabaseUpdate() .",
    category: "Database",
    returnType: "",
  },
  {
    name: "SetDatabaseLong",
    signature: "SetDatabaseLong(#Database, StatementIndex, Value)",
    documentation:
      "Set a long value as a bind variable for the next call to DatabaseQuery() or DatabaseUpdate() .",
    category: "Database",
    returnType: "",
  },
  {
    name: "SetDatabaseQuad",
    signature: "SetDatabaseQuad(#Database, StatementIndex, Value.q)",
    documentation:
      "Set a quad value as a bind variable for the next call to DatabaseQuery() or DatabaseUpdate() .",
    category: "Database",
    returnType: "",
  },
  {
    name: "SetDatabaseFloat",
    signature: "SetDatabaseFloat(#Database, StatementIndex, Value.f)",
    documentation:
      "Set a float as a bind variable for the next call to DatabaseQuery() or DatabaseUpdate() .",
    category: "Database",
    returnType: "",
  },
  {
    name: "SetDatabaseDouble",
    signature: "SetDatabaseDouble(#Database, StatementIndex, Value.d)",
    documentation:
      "Set a double value as a bind variable for the next call to DatabaseQuery() or DatabaseUpdate() .",
    category: "Database",
    returnType: "",
  },
  {
    name: "SetDatabaseNull",
    signature: "SetDatabaseNull(#Database, StatementIndex)",
    documentation:
      "Set a bind variable to a NULL value for the next call to DatabaseQuery() or DatabaseUpdate() .",
    category: "Database",
    returnType: "",
  },
  // ── Date ───────────────────────────────────────
  {
    name: "AddDate",
    signature: "Date.q = AddDate(Date.q, Type, Value)",
    documentation: "Add an amount of time to a date.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "ConvertDate",
    signature: "Date.q = ConvertDate(Date.q, Format)",
    documentation: "Converts a date between local time and UTC time.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "Date",
    signature: "Date.q = Date([Year, Month, Day, Hour, Minute, Second])",
    documentation:
      "Returns the date value created from the given parameters, or the local system time if no parameters are specified.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "DateUTC",
    signature: "Date.q = DateUTC()",
    documentation: "Returns the system date as UTC time.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "Day",
    signature: "Result = Day(Date.q)",
    documentation: "Returns the day component of the specified date.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "DayOfWeek",
    signature: "Result = DayOfWeek(Date.q)",
    documentation: "Returns the weekday of the specified date.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "DayOfYear",
    signature: "Result = DayOfYear(Date.q)",
    documentation:
      "Returns the number of days elapsed since the beginning of the year of the specified date.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "Month",
    signature: "Result = Month(Date.q)",
    documentation: "Returns the month value of the specified date.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "Year",
    signature: "Result = Year(Date.q)",
    documentation: "Returns the year value of the specified date.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "Hour",
    signature: "Result = Hour(Date.q)",
    documentation: "Returns the hour value of the specified date.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "Minute",
    signature: "Result = Minute(Date.q)",
    documentation: "Returns the minute value of the specified date.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "Second",
    signature: "Result = Second(Date.q)",
    documentation: "Returns the second value of the specified date.",
    category: "Date",
    returnType: "i",
  },
  {
    name: "FormatDate",
    signature: "Text\\$ = FormatDate(Mask$, Date.q)",
    documentation: "Returns a string representation of the given Date.",
    category: "Date",
    returnType: "",
  },
  {
    name: "ParseDate",
    signature: "Date.q = ParseDate(Mask$, String$)",
    documentation:
      "Transforms a string date into a regular date value which then can be used by other date functions.",
    category: "Date",
    returnType: "i",
  },
  // ── Debugger ───────────────────────────────────────
  {
    name: "CopyDebugOutput",
    signature: "CopyDebugOutput()",
    documentation: "Copy the debug output window content to the clipboard.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "ShowDebugOutput",
    signature: "ShowDebugOutput()",
    documentation:
      "Open the debug output window or bring it to the front if it is already open.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "CloseDebugOutput",
    signature: "CloseDebugOutput()",
    documentation: "Close the debug output .",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "ClearDebugOutput",
    signature: "ClearDebugOutput()",
    documentation: "Clear the content of the debug output window.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "DebuggerError",
    signature: "DebuggerError(Message$)",
    documentation:
      "Generates a runtime debugger error. The program execution will be stopped if the debugger is activated. Can be useful when creating reusable modules meant to be shared.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "DebuggerWarning",
    signature: "DebuggerWarning(Message$)",
    documentation:
      "Generates a runtime debugger warning. Can be useful when creating reusable modules meant to be shared.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "SaveDebugOutput",
    signature: "SaveDebugOutput(Filename$)",
    documentation:
      "Save the content of the debug output window to the given file.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "ShowProfiler",
    signature: "ShowProfiler()",
    documentation:
      "Open the profiler window or bring it to the front if it is already open.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "ResetProfiler",
    signature: "ResetProfiler()",
    documentation: "Reset the line counters for the profiler.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "StartProfiler",
    signature: "StartProfiler()",
    documentation: "Start the counting of executed lines by the profiler.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "StopProfiler",
    signature: "StopProfiler()",
    documentation: "Stop the counting of executed lines by the profiler.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "ShowMemoryViewer",
    signature: "ShowMemoryViewer([*Buffer, Length])",
    documentation:
      "Open the memory viewer window or bring it to the front if it is already open.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "ShowLibraryViewer",
    signature: "ShowLibraryViewer([Library$ [, #Object]])",
    documentation:
      "Open the library viewer window or bring it to the front if it is already open. If Library$ is specified then the viewer will show the objects of that library. If an #Object number is specified, then the viewer will display the specified object of that library.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "ShowWatchlist",
    signature: "ShowWatchlist()",
    documentation:
      "Open the watchlist window or bring it to the front if it is already open.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "ShowVariableViewer",
    signature: "ShowVariableViewer()",
    documentation:
      "Open the variable viewer window or bring it to the front if it is already open.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "ShowCallstack",
    signature: "ShowCallstack()",
    documentation:
      "Open the callstack window or bring it to the front if it is already open.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "ShowAssemblyViewer",
    signature: "ShowAssemblyViewer()",
    documentation:
      "Open the assembly viewer window or bring it to the front if it is already open.",
    category: "Debugger",
    returnType: "",
  },
  {
    name: "PurifierGranularity",
    signature: "PurifierGranularity(GlobalGranularity, LocalGranularity,",
    documentation:
      "Change the interval in which the purifier checks the different areas for memory corruption.",
    category: "Debugger",
    returnType: "",
  },
  // ── Desktop ───────────────────────────────────────
  {
    name: "ExamineDesktops",
    signature: "Result = ExamineDesktops()",
    documentation:
      "Retrieves information about all the desktops connected to the local computer. This function must be called before using the functions of this library the following functions: DesktopDepth() , DesktopFrequency() , DesktopHeight() , DesktopName() and DesktopWidth() .",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopDepth",
    signature: "Result = DesktopDepth(#Desktop)",
    documentation: "Returns the color depth of the specified desktop.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopResolutionX",
    signature: "Result.d = DesktopResolutionX()",
    documentation: "Returns the desktop DPI resolution factor on the ’x’ axis.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopResolutionY",
    signature: "Result.d = DesktopResolutionY()",
    documentation: "Returns the desktop DPI resolution factor on the ’y’ axis.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopScaledX",
    signature: "Result = DesktopScaledX(Value)",
    documentation:
      "Returns the scaled value according to current display DPI on ’x’ axis. This is mostly useful to calculate real pixel position independently of the display DPI.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopScaledY",
    signature: "Result = DesktopScaledY(Value)",
    documentation:
      "Returns the scaled value according to current display DPI on ’y’ axis. This is mostly useful to calculate real pixel position independently of the display DPI.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopUnscaledX",
    signature: "Result = DesktopUnscaledX(Value)",
    documentation:
      "Returns the unscaled value according to current display DPI on ’x’ axis. This is mostly useful to calculate real pixel position independently of the display DPI.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopUnscaledY",
    signature: "Result = DesktopUnscaledY(Value)",
    documentation:
      "Returns the unscaled value according to current display DPI on ’y’ axis. This is mostly useful to calculate real pixel position independently of the display DPI.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopFrequency",
    signature: "Result = DesktopFrequency(#Desktop)",
    documentation: "Returns the frequency of the specified desktop.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopHeight",
    signature: "Result = DesktopHeight(#Desktop)",
    documentation: "Returns the height of the specified desktop.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopX",
    signature: "Result = DesktopX(#Desktop)",
    documentation: "Returns the x coordinate of the specified desktop.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopY",
    signature: "Result = DesktopY(#Desktop)",
    documentation: "Returns the y coordinate of the specified desktop.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopMouseX",
    signature: "Result = DesktopMouseX()",
    documentation:
      "Returns the absolute x position of the mouse on the desktop.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopMouseY",
    signature: "Result = DesktopMouseY()",
    documentation:
      "Returns the absolute y position of the mouse on the desktop.",
    category: "Desktop",
    returnType: "i",
  },
  {
    name: "DesktopName",
    signature: "Result\\$ = DesktopName(#Desktop)",
    documentation: "Returns the name (if any) for the specified desktop.",
    category: "Desktop",
    returnType: "",
  },
  {
    name: "DesktopWidth",
    signature: "Result = DesktopWidth(#Desktop)",
    documentation: "Returns the width for the specified desktop.",
    category: "Desktop",
    returnType: "i",
  },
  // ── Dialog ───────────────────────────────────────
  {
    name: "CreateDialog",
    signature: "Result = CreateDialog(#Dialog)",
    documentation:
      "Create a new uninitialized dialog. To initialize the dialog, use OpenXMLDialog() .",
    category: "Dialog",
    returnType: "i",
  },
  {
    name: "DialogError",
    signature: "Result\\$ = DialogError(#Dialog)",
    documentation:
      "Returns the last error message (in english) to get more information about dialog creation failure after OpenXMLDialog() .",
    category: "Dialog",
    returnType: "",
  },
  {
    name: "DialogGadget",
    signature: "Result = DialogGadget(#Dialog, Name$)",
    documentation: "Returns the gadget number of the specified gadget name.",
    category: "Dialog",
    returnType: "i",
  },
  {
    name: "DialogWindow",
    signature: "Result = DialogWindow(#Dialog)",
    documentation:
      "Returns the window number of the dialog. It allows to use any window related commands with the dialog. The dialog has to be initialized successfully with OpenXMLDialog() before using this command.",
    category: "Dialog",
    returnType: "i",
  },
  {
    name: "DialogID",
    signature: "Result = DialogID(#Dialog)",
    documentation:
      "Returns the unique ID which identifies the dialog in the operating system.",
    category: "Dialog",
    returnType: "i",
  },
  {
    name: "FreeDialog",
    signature: "FreeDialog(#Dialog)",
    documentation:
      "Free the specified dialog and release its associated memory. If the dialog window was still opened, it will be automatically closed.",
    category: "Dialog",
    returnType: "",
  },
  {
    name: "IsDialog",
    signature: "Result = IsDialog(#Dialog)",
    documentation: "Tests if the given dialog number is a valid dialog.",
    category: "Dialog",
    returnType: "i",
  },
  {
    name: "OpenXMLDialog",
    signature:
      "Result = OpenXMLDialog(#Dialog, #XML, Name$ [, x, y [, Width, Height [,",
    documentation:
      "Open the specified dialog and display it on the screen. To access the dialog gadgets use DialogGadget() . To get the window number of this dialog use DialogWindow() . UseDialogScintillaGadget() , UseDialogOpenGLGadget() , UseDialogWebGadget() and",
    category: "Dialog",
    returnType: "i",
  },
  {
    name: "RefreshDialog",
    signature: "RefreshDialog(#Dialog)",
    documentation:
      "Refresh the dialog size to adjust it to any change. For example, when changing the text content of gadgets, the dialog size will may be need adjustments.",
    category: "Dialog",
    returnType: "",
  },
  {
    name: "UseDialogOpenGLGadget",
    signature: "UseDialogOpenGLGadget()",
    documentation:
      "Enable OpenGLGadget() support in the dialog library. This is not enabled by default to reduce the dialog library size footprint if OpenGLGadget() is not needed.",
    category: "Dialog",
    returnType: "",
  },
  {
    name: "UseDialogScintillaGadget",
    signature: "UseDialogScintillaGadget()",
    documentation:
      "Enable ScintillaGadget() support in the dialog library. This is not enabled by default to reduce the dialog library size footprint if ScintillaGadget() is not needed.",
    category: "Dialog",
    returnType: "",
  },
  {
    name: "UseDialogWebGadget",
    signature: "UseDialogWebGadget()",
    documentation:
      "Enable WebGadget() support in the dialog library. This is not enabled by default to reduce the dialog library size footprint if WebGadget() is not needed.",
    category: "Dialog",
    returnType: "",
  },
  {
    name: "UseDialogWebViewGadget",
    signature: "UseDialogWebViewGadget()",
    documentation:
      "Enable WebViewGadget() support in the dialog library. This is not enabled by default to reduce the dialog library size footprint if WebViewGadget() is not needed.",
    category: "Dialog",
    returnType: "",
  },
  // ── DragDrop ───────────────────────────────────────
  {
    name: "DragText",
    signature: "Result = DragText(Text$ [, Actions])",
    documentation: "Starts a Drag & Drop operation with text data.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "DragImage",
    signature: "Result = DragImage(ImageID [, Actions])",
    documentation: "Starts a Drag & Drop operation with image data.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "DragFiles",
    signature: "Result = DragFiles(Files$ [, Actions])",
    documentation: "Starts a Drag & Drop operation with a list of filenames.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "DragPrivate",
    signature: "Result = DragPrivate(Type [, Actions])",
    documentation:
      "Starts a ”private” Drag & Drop operation. Unlike the other functions that start Drag & Drop, this data can only be dropped inside the application (Data dragged with functions like DragText() or DragImage() can be accepted by other applications as well). This function should be used to add Drag",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "DragOSFormats",
    signature: "Result = DragOSFormats(Formats(), Count [, Actions])",
    documentation:
      "Starts a Drag & Drop operation with a list of custom data formats. The types of formats available and the way in which they are represented depends on the Operating system. This function offers the possibility to work with formats not natively supported by PureBasic, while still using the simple",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "EnableGadgetDrop",
    signature: "EnableGadgetDrop(#Gadget, Format, Actions [, PrivateType])",
    documentation:
      "Enables a gadget to be a target for Drag & Drop operations of a specific format. When the user drags data of this format over the gadget, the cursor will indicate that the data can be dropped there.",
    category: "DragDrop",
    returnType: "",
  },
  {
    name: "EnableWindowDrop",
    signature: "EnableWindowDrop(#Window, Format, Actions [, PrivateType])",
    documentation:
      "Enables a window to be a target for Drag & Drop operations of a specific format. Only the area not covered by any gadgets will be the target area. When the user drags data of this format over the window, the cursor will indicate that the data can be dropped there.",
    category: "DragDrop",
    returnType: "",
  },
  {
    name: "EventDropAction",
    signature: "Result = EventDropAction()",
    documentation:
      "After a #PB_Event_GadgetDrop or #PB_Event_WindowDrop is received by WaitWindowEvent() or WindowEvent() , this function returns the action that should be taken with the data.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "EventDropType",
    signature: "Result = EventDropType()",
    documentation:
      "After a #PB_Event_GadgetDrop or #PB_Event_WindowDrop is received by WaitWindowEvent() or WindowEvent() , this function returns the format of the dropped data.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "EventDropText",
    signature: "Result\\$ = EventDropText()",
    documentation:
      "After a #PB_Event_GadgetDrop or #PB_Event_WindowDrop is received by WaitWindowEvent() or WindowEvent() with a format (can be get with EventDropType() ) of #PB_Drop_Text, this function returns the text that was dropped.",
    category: "DragDrop",
    returnType: "",
  },
  {
    name: "EventDropImage",
    signature: "Result = EventDropImage(#Image [, Depth])",
    documentation:
      "After a #PB_Event_GadgetDrop or #PB_Event_WindowDrop is received by WaitWindowEvent() or WindowEvent() with a format (can be get with EventDropType() ) of #PB_Drop_Image, this function can be used to retrieve the dropped image.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "EventDropFiles",
    signature: "Result\\$ = EventDropFiles()",
    documentation:
      "After a #PB_Event_GadgetDrop or #PB_Event_WindowDrop is received by WaitWindowEvent() or WindowEvent() with a format (can be get with EventDropType() ) of #PB_Drop_Files, this function returns the dropped filenames.",
    category: "DragDrop",
    returnType: "",
  },
  {
    name: "EventDropPrivate",
    signature: "Result = EventDropPrivate()",
    documentation:
      "After a #PB_Event_GadgetDrop or #PB_Event_WindowDrop is received by WaitWindowEvent() or WindowEvent() with a format (can be get with EventDropType() ) of #PB_Drop_Private, this function returns the ’PrivateType’ that was dropped.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "EventDropBuffer",
    signature: "*Result = EventDropBuffer()",
    documentation:
      "After a #PB_Event_GadgetDrop or #PB_Event_WindowDrop is received by WaitWindowEvent() or WindowEvent() with an OS specific format, this function can be used to access the data.",
    category: "DragDrop",
    returnType: "",
  },
  {
    name: "EventDropSize",
    signature: "Result = EventDropSize()",
    documentation:
      "After a #PB_Event_GadgetDrop or #PB_Event_WindowDrop is received by WaitWindowEvent() or WindowEvent() with an OS specific format, this function returns the size of the dropped data.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "EventDropX",
    signature: "Result = EventDropX()",
    documentation:
      "After a #PB_Event_GadgetDrop or #PB_Event_WindowDrop is received by WaitWindowEvent() or WindowEvent() , this function returns the X position at which the data was dropped.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "EventDropY",
    signature: "Result = EventDropY()",
    documentation:
      "After a #PB_Event_GadgetDrop or #PB_Event_WindowDrop is received by WaitWindowEvent() or WindowEvent() , this function returns the Y position at which the data was dropped.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "SetDragCallback",
    signature: "SetDragCallback(@DragCallback())",
    documentation:
      "A callback function to be called during a Drag & Drop operation initiated from this application. The callback allows to modify the Drag & Drop process provided by PureBasic, for example by providing a custom cursor through the API of the Operating system.",
    category: "DragDrop",
    returnType: "",
  },
  {
    name: "SetDropCallback",
    signature: "SetDropCallback(@DropCallback())",
    documentation:
      "A callback function to be called when data is dragged over a gadget or window that allows data to be dropped (see EnableGadgetDrop() / EnableWindowDrop() ). The callback allows to modify the Drag & Drop process provided by PureBasic, for example by providing extra visual notification on",
    category: "DragDrop",
    returnType: "",
  },
  {
    name: "ExamineDraggedItems",
    signature: "ExamineDraggedItems()",
    documentation:
      "Start to examine the dragged items with the functions NextDraggedItem() and DraggedItemIndex() . It has to be used after a #PB_Event_DragStart. This function is supported for the following gadgets: ExplorerListGadget() , ExplorerTreeGadget() ,",
    category: "DragDrop",
    returnType: "",
  },
  {
    name: "NextDraggedItem",
    signature: "Result = NextDraggedItem()",
    documentation:
      "This function must be called after ExamineDraggedItems() . It will iterate over dragged items.",
    category: "DragDrop",
    returnType: "i",
  },
  {
    name: "DraggedItemIndex",
    signature: "Result = DraggedItemIndex()",
    documentation:
      "Return the current dragged item index. This function has to be called after NextDraggedItem() .",
    category: "DragDrop",
    returnType: "i",
  },
  // ── Engine3D ───────────────────────────────────────
  {
    name: "Add3DArchive",
    signature: "Add3DArchive(Path$, Type)",
    documentation:
      "Add a new absolute or relative path to the current 3D path list. All the 3D functions which need to load data (e.g. texture , mesh , sky , world ) will use this path. It needs to be put after OpenScreen() or OpenWindowedScreen() .",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "AmbientColor",
    signature: "AmbientColor(Color)",
    documentation: "Changes the ambient color of the world.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "AntialiasingMode",
    signature: "AntialiasingMode(Mode)",
    documentation:
      "Changes the fullscreen antialiasing mode. This function has to be called before OpenScreen() to have any effect.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "ConvertLocalToWorldPosition",
    signature: "ConvertLocalToWorldPosition(ObjectID, x, y, z)",
    documentation:
      "Converts the local x,y,z coordinates into world coordinates. GetX() , GetY() and GetZ() will be used to get the converted coordinates.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "ConvertWorldToLocalPosition",
    signature: "ConvertWorldToLocalPosition(ObjectID, x, y, z)",
    documentation:
      "Converts the world x,y,z coordinates into local coordinates. GetX() , GetY() and GetZ() will be used to get the converted coordinates.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "Engine3DStatus",
    signature: "Result = Engine3DStatus(Type)",
    documentation: "Gets the 3D engine current status.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "EnableWorldCollisions",
    signature: "EnableWorldCollisions(State)",
    documentation: "Enable or disable the collisions in the world.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "EnableWorldPhysics",
    signature: "EnableWorldPhysics(State)",
    documentation: "Enable or disable the physics engine in the world.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "ExamineWorldCollisions",
    signature: "Result = ExamineWorldCollisions(Contacts)",
    documentation:
      "Examine the collisions which have occurred in the world since the last call. Collisions have to be enabled with EnableWorldCollisions() before using this command. To step through the collisions, use NextWorldCollision() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "NextWorldCollision",
    signature: "Result = NextWorldCollision()",
    documentation:
      "Go to the next collision. ExamineWorldCollisions() needs to be called successfully before using this command. To get more information about the current collision, use FirstWorldCollisionEntity() , SecondWorldCollisionEntity() , WorldCollisionContact() , WorldCollisionNormal() and",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "FirstWorldCollisionEntity",
    signature: "Result = FirstWorldCollisionEntity()",
    documentation:
      "Returns the #Entity number of the first object in the collision being examined with ExamineWorldCollisions() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "SecondWorldCollisionEntity",
    signature: "Result = SecondWorldCollisionEntity()",
    documentation:
      "Returns the #Entity number of the second object in the collision being examined with ExamineWorldCollisions() ().",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "WorldCollisionContact",
    signature: "WorldCollisionContact()",
    documentation:
      "Fetch contact information about the collision being examined with ExamineWorldCollisions() (). ExamineWorldCollisions() ’Contacts’ parameter has to be set to #True to have this command working. The contact vector values can be retrieved with GetX() , GetY() and GetZ() .",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "WorldCollisionNormal",
    signature: "WorldCollisionNormal()",
    documentation:
      "Fetch contact normal information about the collision being examined with ExamineWorldCollisions() (). ExamineWorldCollisions() ’Contacts’ parameter has to be set to #True to have this command working. The contact normal vector values can be retrieved with",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "WorldCollisionAppliedImpulse",
    signature: "Result.f = WorldCollisionAppliedImpulse()",
    documentation:
      "Returns the applied impulse about the collision being examined with ExamineWorldCollisions() . ExamineWorldCollisions() ’Contacts’ parameter has to be set to #True to have this command working.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "FetchOrientation",
    signature: "FetchOrientation(ObjectID [, Mode])",
    documentation:
      "Get the orientation of the specified object. GetX() , GetY() , GetZ() and GetW() will be used to get orientation values.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "SetOrientation",
    signature: "SetOrientation(ObjectID, x, y, z, w)",
    documentation: "Set the orientation of the specified object.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "GetX",
    signature: "Result = GetX()",
    documentation:
      "Returns the x value of the last called command. Supported commands are FetchOrientation() , ConvertLocalToWorldPosition() and ConvertWorldToLocalPosition() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "GetY",
    signature: "Result = GetY()",
    documentation:
      "Returns the y value of the last called command. Supported commands are FetchOrientation() , ConvertLocalToWorldPosition() and ConvertWorldToLocalPosition() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "GetZ",
    signature: "Result = GetZ()",
    documentation:
      "Returns the z value of the last called command. Supported commands are FetchOrientation() , ConvertLocalToWorldPosition() and ConvertWorldToLocalPosition() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "GetW",
    signature: "Result = GetW()",
    documentation:
      "Returns the w value of the last called command. The only supported command is FetchOrientation() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "Fog",
    signature: "Fog(Color, Intensity, StartDistance, EndDistance)",
    documentation:
      "Creates a fog at the specified distance of the camera. The fog effect is applied to all cameras. The fog is also applied automatically to the SkyBox() and SkyDome() commands if called before them.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "InitEngine3D",
    signature: "Result = InitEngine3D([Flags [, LibraryName$])",
    documentation:
      "Initializes the 3D environment for later use. You must put this function at the top of your source code if you want to use any of the 3D functions.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "LoadWorld",
    signature: "Result = LoadWorld(Filename$)",
    documentation:
      "This function loads an entire world. Currently, the Quake3 BSP format is the only one supported but more formats will follow. The Filename$ must be accessible in the 3D path, so the Add3DArchive() function should be used before calling this function. A world can be easily created",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "MousePick",
    signature: "Result = MousePick(#Camera, x, y [, PickMask])",
    documentation:
      "Simulates a mouse click and returns which object is under the specified 2D point on the specified camera.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "PointPick",
    signature: "Result = PointPick(#Camera, x, y)",
    documentation:
      "Allows to get the direction the specified 2D point on the specified camera.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "BodyPick",
    signature: "Result = BodyPick(#Camera, Picked, x, y, Locked)",
    documentation:
      "Simulates a mouse click and starts the manipulate the entity at the specified coordinate.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "PickX",
    signature: "Result.f = PickX()",
    documentation:
      "After MousePick() or RayPick() , it returns the ’x’ position of the picked object in world coordinates. After PointPick() , it returns the ’x’ direction of the picked point, between -1 and 1.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "PickY",
    signature: "Result.f = PickY()",
    documentation:
      "After MousePick() or RayPick() , it returns the ’y’ position of the picked object in world coordinates. After PointPick() , it returns the ’y’ direction of the picked point, between -1 and 1.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "PickZ",
    signature: "Result.f = PickZ()",
    documentation:
      "After MousePick() or RayPick() , it returns the ’z’ position of the picked object in world coordinates. After PointPick() , it returns the ’z’ direction of the picked point, between -1 and 1.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "RayCollide",
    signature: "Result = RayCollide(x, y, z, DestinationX, DestinationY,",
    documentation:
      "Casts a ray between the first point and the second point, and checks if an entity is colliding the ray. This function relies on the physic engine, which needs to be activated with EnableWorldPhysics() before using this command. Only entities with bodies will react to the ray.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "RayCast",
    signature:
      "Result = RayCast(x, y, z, DestinationX, DestinationY, DestinationZ,",
    documentation:
      "Casts a ray between the first point and the second point, and checks if an object is crossing the ray. This function doesn’t rely on the physic engine. The normals value at the impact point are available with NormalX() , NormalY() and NormalZ() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "MouseRayCast",
    signature: "Result = MouseRayCast(#Camera, x, y, PickMask)",
    documentation:
      "Casts a ray from the 2D point through the scene, and checks if an object is crossing the ray. This function doesn’t rely on the physic engine. The normals value at the impact point are available with NormalX() , NormalY() and NormalZ() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "NormalX",
    signature: "Result.f = NormalX()",
    documentation:
      "Returns the ’x’ normal value at the crossed point, after RayCast() , RayCollide() or MouseRayCast() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "NormalY",
    signature: "Result.f = NormalY()",
    documentation:
      "Returns the ’y’ normal value at the crossed point, after RayCast() , RayCollide() or MouseRayCast() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "NormalZ",
    signature: "Result.f = NormalZ()",
    documentation:
      "Returns the ’z’ normal value at the crossed point, after RayCast() , RayCollide() or MouseRayCast() .",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "RayPick",
    signature:
      "Result = RayPick(x, y, z, DestinationX, DestinationY, DestinationZ",
    documentation:
      "Casts a ray between the first point and the second point, and checks if an object is crossing the ray.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "ShowGUI",
    signature: "ShowGUI(Transparency, ShowMouse [, #Camera, Enable])",
    documentation:
      "Shows or hides the whole GUI elements, which are composed of 3d windows and 3d gadgets .",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "SetGUITheme3D",
    signature: "SetGUITheme3D(ThemeName$, FontName$)",
    documentation:
      "As CEGUI support skinning, this command allow to select which theme and which font to use for the GUI. This command has to be called before any other GUI commands to have an effect.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "Parse3DScripts",
    signature: "Parse3DScripts()",
    documentation:
      "Parses all the .materials OGRE scripts found in the paths set with Add3DArchive() . This allows the use of meshes with complex materials scripts directly in PureBasic. When creating the entity the constant #PB_Material_None has to be specified, so all the material information will be",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "RenderWorld",
    signature: "Result = RenderWorld([ElapsedPhysicTime])",
    documentation:
      "Renders the whole world on the screen. This function should be called once all 3D operations are finished and only one time per frame.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "SetRenderQueue",
    signature: "SetRenderQueue(ObjectID, Queue [, Priority])",
    documentation: "Change the render order of the specified object.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "SkyBox",
    signature: "Result = SkyBox(TextureName$ [, FogColor, FogIntensity,",
    documentation:
      "Loads a 6 face cube and creates an artificial box which is far away from the camera but close to the world. This is a very useful function to easily make a closed world.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "SkyDome",
    signature:
      "Result = SkyDome(TextureID, SkyColor, RiseColor [, NbCloudLayers,",
    documentation:
      "Creates a new SkyDome which is a curved moving sky displayed using the specified cloud texture.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "CreateWater",
    signature:
      "CreateWater(WaveTextureID, FoamTextureID, WaterColor, SkyColor,",
    documentation: "Creates a world wide water plane.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "WorldShadows",
    signature: "WorldShadows(Type [, Distance.f [, Color [, TextureSize]]])",
    documentation: "Sets how shadows will be rendered in the world.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "WorldGravity",
    signature: "WorldGravity(Gravity.f [, x, y, z])",
    documentation:
      "Changes the gravity of the world when the physics engine is enabled with EnableWorldPhysics() .",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "WorldDebug",
    signature: "WorldDebug(Mode)",
    documentation:
      "Changes the world debug mode. This can be very useful to help finding issues with collisions or picking for example.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "Pitch",
    signature: "Pitch(ObjectID, Value.f, Mode)",
    documentation: "Pitch the specified object.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "Roll",
    signature: "Roll(ObjectID, Value.f, Mode)",
    documentation: "Roll the specified object.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "Yaw",
    signature: "Yaw(ObjectID, Value.f, Mode)",
    documentation: "Yaw the specified object.",
    category: "Engine3D",
    returnType: "",
  },
  {
    name: "GetWorldAttribute",
    signature: "Result.f = GetWorldAttribute(Attribute)",
    documentation: "Get the specified attribute of the world.",
    category: "Engine3D",
    returnType: "i",
  },
  {
    name: "SetWorldAttribute",
    signature: "SetWorldAttribute(Attribute, Value.f)",
    documentation: "Set the specified attribute of the world.",
    category: "Engine3D",
    returnType: "",
  },
  // ── Entity ───────────────────────────────────────
  {
    name: "ApplyEntityForce",
    signature: "ApplyEntityForce(#Entity, x, y, z [, PositionX, PositionY,",
    documentation:
      "Apply the specified force to the entity. The new force value replace any previous force previously applied to the entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "ApplyEntityImpulse",
    signature: "ApplyEntityImpulse(#Entity, x, y, z [, PositionX, PositionY,",
    documentation:
      "Apply an impulse to the entity. The new impulse is added to the current force of the entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "ApplyEntityTorque",
    signature: "ApplyEntityTorque(#Entity, x, y, z [, Mode])",
    documentation:
      "Apply a rotation force to the entity. The new rotation force replace any previous force previously applied to the entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "ApplyEntityTorqueImpulse",
    signature: "ApplyEntityTorqueImpulse(#Entity, x, y, z [, Mode])",
    documentation:
      "Apply a rotation impulse to the entity. The new impulse is added to the rotation force previously applied to the entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "CopyEntity",
    signature: "Result = CopyEntity(#Entity, #NewEntity)",
    documentation:
      "Creates a #NewEntity which is the exact copy of the specified #Entity. If #PB_Any is used as ’#NewEntity’ parameter, the new entity number will be returned as ’Result’. If the ’Result’ is 0, the entity copy has failed. If #NewEntity was already created, it will be",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "CreateEntity",
    signature: "Result = CreateEntity(#Entity, MeshID, MaterialID, [x, y, z [,",
    documentation:
      "Creates a new #Entity using the specified Mesh and Material.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityFixedYawAxis",
    signature:
      "EntityFixedYawAxis(#Entity, Enable [, VectorX, VectorY, VectorZ])",
    documentation:
      "Change the fixed yaw axis of the entity. The default behaviour of a entity is to yaw around its own Y axis.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityID",
    signature: "EntityID = EntityID(#Entity)",
    documentation:
      "Returns the unique ID which identifies the given ’#Entity’ in the operating system. This function is very useful when another library needs a entity reference.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityLookAt",
    signature: "EntityLookAt(#Entity, x, y, z [, DirectionX, DirectionY,",
    documentation:
      "The point (in world unit) that an entity is facing. The position of the entity is not changed.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityVelocity",
    signature: "EntityVelocity(#Entity, x, y, z)",
    documentation:
      "Changes the linear velocity of the #Entity. The linear factor is applied to the entity before any move. To get the final value, see EntityLinearFactor() for more information. The entity needs a physic body to support linear velocity. To get the current entity velocity, use GetEntityAttribute()",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityAngularFactor",
    signature: "EntityAngularFactor(#Entity, x, y, z)",
    documentation: "Changes the angular factor of the #Entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityLinearFactor",
    signature: "EntityLinearFactor(#Entity, x, y, z)",
    documentation:
      "Changes the linear factor for the #Entity. When moved, the entity linear velocity is multiplied by the linear factor to get the final velocity. This is very useful to constraint an entity move on one or several axis. By default, the linear factor is 1 for all axis meaning no impact on the velocity. The",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityCustomParameter",
    signature:
      "EntityCustomParameter(#Entity, SubEntity, ParameterIndex, Value1.f,",
    documentation:
      "Set a custom parameter value to the #Entity material shader script. To have any effect, the material associated to the entity should have a shader script (either GLSL or HLSL).",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityBoundingBox",
    signature: "Result = EntityBoundingBox(#Entity, Flags)",
    documentation:
      "Returns the position of the bounding box, either in local or world coordinate.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "DisableEntityBody",
    signature: "DisableEntityBody(#Entity, Disable)",
    documentation:
      "Disable an entity body. The physic engine doesn’t affect the entity anymore when an entity body is disabled.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityParentNode",
    signature: "Result = EntityParentNode(#Entity)",
    documentation: "Returns the parent NodeID() .",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "FetchEntityMaterial",
    signature: "Result = FetchEntityMaterial(#Entity, #Material [, SubEntity])",
    documentation:
      "Fetch the material associated to the specified #Entity with SetEntityMaterial() .",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "SetEntityMaterial",
    signature: "SetEntityMaterial(#Entity, MaterialID [, SubEntity])",
    documentation:
      "Assign a material to the specified #Entity. An entity can only have one material assigned at once.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityCollide",
    signature: "Result = EntityCollide(#Entity, #Entity2)",
    documentation:
      "Checks if the two specified entities are colliding. To have its collisions managed by the physic engine, an entity needs a body created with CreateEntityBody() . To have any effect, the physic engine needs to be activated with the EnableWorldPhysics() .",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "CreateEntityBody",
    signature:
      "CreateEntityBody(#Entity, Type [, Mass [, Restitution, Friction [,",
    documentation:
      "Changes the type of the body associated with the #Entity. To have its collisions managed by the physic engine, an entity has to set a body. In fact, only the body is known by the physic engine, which will do all the calculation about the entity, check the",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityRenderMode",
    signature: "EntityRenderMode(#Entity, Mode)",
    documentation: "Changes the render mode of the specified entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "AttachEntityObject",
    signature: "AttachEntityObject(#Entity, Bone$, ObjectID [, x, y, z, Pitch,",
    documentation:
      "Attach an existing object to an entity bone. An object can be detached from an entity with DetachEntityObject() .",
    category: "Entity",
    returnType: "",
  },
  {
    name: "DetachEntityObject",
    signature: "DetachEntityObject(#Node, ObjectID)",
    documentation:
      "Detach a previously attached object from an #Entity bone. The supported objects are the following: - Entity : use EntityID() as ’ObjectID’. - Camera : use CameraID() as ’ObjectID’. - Light : use LightID() as ’ObjectID’. - BillboardGroup : use BillboardGroupID()",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EnableManualEntityBoneControl",
    signature: "EnableManualEntityBoneControl(#Entity, Bone$, State,",
    documentation:
      "Enable the manual control of a bone. It can be manually moved with MoveEntityBone() , rotated with RotateEntityBone() or scaled with ScaleEntityBone() .",
    category: "Entity",
    returnType: "",
  },
  {
    name: "MoveEntityBone",
    signature: "MoveEntityBone(#Entity, Bone$, x, y, z, Mode)",
    documentation:
      "Move the specified entity bone. The bone has to be in manual mode, set with EnableManualEntityBoneControl() .",
    category: "Entity",
    returnType: "",
  },
  {
    name: "ScaleEntityBone",
    signature: "ScaleEntityBone(#Entity, Bone$, x, y, z, Mode)",
    documentation:
      "Scale the specified entity bone. The bone has to be in manual mode, set with EnableManualEntityBoneControl() .",
    category: "Entity",
    returnType: "",
  },
  {
    name: "FreeEntityBody",
    signature: "FreeEntityBody(#Entity)",
    documentation: "Free the body associated with the entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "FreeEntityJoints",
    signature: "FreeEntityJoints(#Entity)",
    documentation: "Free all joints associated with the entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityBoneX",
    signature:
      "Result = EntityBoneX(#Entity, Bone$ [, OffsetX, OffsetY, OffsetZ])",
    documentation: "Returns the ’x’ position of the bone in the world.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityBoneY",
    signature:
      "Result = EntityBoneY(#Entity, Bone$ [, OffsetX, OffsetY, OffsetZ])",
    documentation: "Returns the ’y’ position of the bone in the world.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityBoneZ",
    signature:
      "Result = EntityBoneZ(#Entity, Bone$ [, OffsetX, OffsetY, OffsetZ])",
    documentation: "Returns the ’z’ position of the bone in the world.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityBonePitch",
    signature: "Result = EntityBonePitch(#Entity, Bone$)",
    documentation: "Returns the pitch of the entity bone.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityBoneYaw",
    signature: "Result = EntityBoneYaw(#Entity, Bone$)",
    documentation: "Returns the yaw of the entity bone.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityBoneRoll",
    signature: "Result = EntityBoneRoll(#Entity, Bone$)",
    documentation: "Returns the roll of the entity bone.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityX",
    signature: "Result = EntityX(#Entity [, Mode])",
    documentation: "Returns the current position of the entity in the world.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityY",
    signature: "Result = EntityY(#Entity [, Mode])",
    documentation: "Returns the current position of the entity in the world.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityZ",
    signature: "Result = EntityZ(#Entity [, Mode])",
    documentation: "Returns the current position of the entity in the world.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "FreeEntity",
    signature: "FreeEntity(#Entity)",
    documentation:
      "Free the specified #Entity created with CreateEntity() before. All its associated memory is released and this object can’t be used anymore.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "HideEntity",
    signature: "HideEntity(#Entity, State)",
    documentation:
      "Hides or shows the specified #Entity. ’State’ can take the following values: 1: the #Entity is hidden 0: the #Entity is shown",
    category: "Entity",
    returnType: "",
  },
  {
    name: "IsEntity",
    signature: "Result = IsEntity(#Entity)",
    documentation:
      "Tests if the given #Entity is a valid and correctly initialized entity. This function is bulletproof and can be used with any value. If the ’Result’ is not zero then the object is valid and initialized, else it returns zero. This is the correct way to ensure an entity is",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "MoveEntity",
    signature: "MoveEntity(#Entity, x, y, z [, Mode])",
    documentation: "Move the specified entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "RotateEntity",
    signature: "RotateEntity(#Entity, x, y, z [, Mode])",
    documentation:
      "Rotates the entity according to the specified x,y,z angle values.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "RotateEntityBone",
    signature: "RotateEntityBone(#Entity, Bone$, x, y, z, Mode)",
    documentation:
      "Rotates the entity bone according to the specified x,y,z angle values. The bone has to be in manual mode, set with EnableManualEntityBoneControl() .",
    category: "Entity",
    returnType: "",
  },
  {
    name: "ScaleEntity",
    signature: "ScaleEntity(#Entity, x, y, z [, Mode])",
    documentation:
      "Scales the entity according to the specified x,y,z values. When using #PB_Relative mode, this is a factor based scale which means the entity size will be multiplied with the given value to obtain the new size.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityRoll",
    signature: "Result = EntityRoll(#Entity [, Mode])",
    documentation: "Get the roll of the #Entity.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityPitch",
    signature: "Result = EntityPitch(#Entity [, Mode])",
    documentation: "Get the pitch of the #Entity.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityYaw",
    signature: "Result = EntityYaw(#Entity [, Mode])",
    documentation: "Get the yaw of the #Entity.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "GetEntityAttribute",
    signature: "Result.f = GetEntityAttribute(#Entity, Attribute)",
    documentation: "Get the specified attribute of the given entity.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "SetEntityAttribute",
    signature: "SetEntityAttribute(#Entity, Attribute, Value.f)",
    documentation: "Set the specified attribute value to the given entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "GetEntityCollisionMask",
    signature: "Result = GetEntityCollisionMask(#Entity)",
    documentation:
      "Get the current entity collision mask, as set with SetEntityCollisionFilter() .",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "GetEntityCollisionGroup",
    signature: "Result = GetEntityCollisionGroup(#Entity)",
    documentation:
      "Get the current entity collision group, as set with SetEntityCollisionFilter() .",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "SetEntityCollisionFilter",
    signature:
      "SetEntityCollisionFilter(#Entity, CollisionGroup, CollisionMask)",
    documentation: "Set the entity collision group and mask.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "AddSubEntity",
    signature:
      "Result = AddSubEntity(#Entity, #SubEntity, Type, [OffsetX, OffsetY,",
    documentation: "Add a sub entity to an entity.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityDirection",
    signature:
      "EntityDirection(#Entity, x, y, z [, Mode, LocalDirectionVector])",
    documentation: "Set the direction for the entity.",
    category: "Entity",
    returnType: "",
  },
  {
    name: "EntityDirectionX",
    signature: "Result = EntityDirectionX(#Entity)",
    documentation: "Get the ’x’ direction of the entity.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityDirectionY",
    signature: "Result = EntityDirectionY(#Entity)",
    documentation: "Get the ’y’ direction of the entity.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "EntityDirectionZ",
    signature: "Result = EntityDirectionZ(#Entity)",
    documentation: "Get the ’z’ direction of the entity.",
    category: "Entity",
    returnType: "i",
  },
  {
    name: "GetEntityMesh",
    signature: "Result = GetEntityMesh(#Entity)",
    documentation: "Returns the #Mesh used by the entity.",
    category: "Entity",
    returnType: "i",
  },
  // ── EntityAnimation ───────────────────────────────────────
  {
    name: "AddEntityAnimationTime",
    signature: "AddEntityAnimationTime(#Entity, Animation$, Time)",
    documentation: "Add time to the specified #Entity animation.",
    category: "EntityAnimation",
    returnType: "",
  },
  {
    name: "StartEntityAnimation",
    signature: "StartEntityAnimation(#Entity, Animation$ [, Flags])",
    documentation:
      "Start the specified #Entity animation. The animation is always started from the beginning.",
    category: "EntityAnimation",
    returnType: "",
  },
  {
    name: "StopEntityAnimation",
    signature: "StopEntityAnimation(#Entity, Animation$)",
    documentation: "Stop the specified #Entity animation.",
    category: "EntityAnimation",
    returnType: "",
  },
  {
    name: "EntityAnimationStatus",
    signature: "Result = EntityAnimationStatus(#Entity, Animation$)",
    documentation: "Return the specified #Entity animation status.",
    category: "EntityAnimation",
    returnType: "i",
  },
  {
    name: "EntityAnimationBlendMode",
    signature: "EntityAnimationBlendMode(#Entity, Mode)",
    documentation: "Changes the #Entity animation blendmode.",
    category: "EntityAnimation",
    returnType: "",
  },
  {
    name: "GetEntityAnimationTime",
    signature: "Result = GetEntityAnimationTime(#Entity, Animation$)",
    documentation: "Returns the current #Entity animation time.",
    category: "EntityAnimation",
    returnType: "i",
  },
  {
    name: "SetEntityAnimationTime",
    signature: "SetEntityAnimationTime(#Entity, Animation$, Time)",
    documentation:
      "Changes the current #Entity animation time. This is an absolute time position. To change the time relative to the current time, use AddEntityAnimationTime() .",
    category: "EntityAnimation",
    returnType: "",
  },
  {
    name: "GetEntityAnimationLength",
    signature: "Result = GetEntityAnimationLength(#Entity, Animation$)",
    documentation: "Returns the #Entity animation length.",
    category: "EntityAnimation",
    returnType: "i",
  },
  {
    name: "SetEntityAnimationLength",
    signature: "SetEntityAnimationLength(#Entity, Animation$, Length)",
    documentation: "Change the #Entity animation length.",
    category: "EntityAnimation",
    returnType: "",
  },
  {
    name: "GetEntityAnimationWeight",
    signature: "Result = GetEntityAnimationWeight(#Entity, Animation$)",
    documentation:
      "Returns the #Entity animation weight. The weight is useful when playing several animations at once. For example to do a smooth transition from one animation to another, it is possible to reduce progressively the weight of the first animation and increase the weight of the second animation.",
    category: "EntityAnimation",
    returnType: "i",
  },
  {
    name: "SetEntityAnimationWeight",
    signature: "SetEntityAnimationWeight(#Entity, Animation$, Weight)",
    documentation:
      "Changes the #Entity animation weight. The weight is useful when playing several animations at once. For example to do a smooth transition from one animation to another, it is possible to reduce progressively the weight of the first animation and increase the weight of the second animation.",
    category: "EntityAnimation",
    returnType: "",
  },
  {
    name: "UpdateEntityAnimation",
    signature: "UpdateEntityAnimation(#Entity, Animation$)",
    documentation:
      "Update the #Entity animation. For example, if the vertices of the mesh have been modified the animation cache needs to be recalculated.",
    category: "EntityAnimation",
    returnType: "",
  },
  // ── File ───────────────────────────────────────
  {
    name: "CloseFile",
    signature: "CloseFile(#File)",
    documentation: "Close the specified file.",
    category: "File",
    returnType: "",
  },
  {
    name: "CreateFile",
    signature: "Result = CreateFile(#File, Filename$ [, Flags])",
    documentation: "Create an empty file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "Eof",
    signature: "Result = Eof(#File)",
    documentation: "Checks whether the end of the file has been reached.",
    category: "File",
    returnType: "i",
  },
  {
    name: "FileBuffersSize",
    signature: "FileBuffersSize(#File, Size)",
    documentation:
      "Changes the size of the memory buffer used for file operations.",
    category: "File",
    returnType: "",
  },
  {
    name: "FileID",
    signature: "Result = FileID(#File)",
    documentation: "Returns the operating system handle of the file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "FileSeek",
    signature: "FileSeek(#File, NewPosition.q [, Mode])",
    documentation: "Change the read/write pointer position in the file.",
    category: "File",
    returnType: "",
  },
  {
    name: "FlushFileBuffers",
    signature: "Result = FlushFileBuffers(#File)",
    documentation: "Ensures that all buffered operations are written to disk.",
    category: "File",
    returnType: "i",
  },
  {
    name: "IsFile",
    signature: "Result = IsFile(#File)",
    documentation:
      "Tests if the given #File number is a valid and correctly initialized file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "Loc",
    signature: "Position.q = Loc(#File)",
    documentation: "Returns the read/write pointer position in the file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "Lof",
    signature: "Length.q = Lof(#File)",
    documentation: "Returns the length of the specified file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "OpenFile",
    signature: "Result = OpenFile(#File, Filename$ [, Flags])",
    documentation:
      "Opens a file for reading/writing or creates a new file if it does not exist.",
    category: "File",
    returnType: "i",
  },
  {
    name: "TruncateFile",
    signature: "TruncateFile(#File)",
    documentation:
      "Cuts the file at the current file position and discards all data that follows.",
    category: "File",
    returnType: "",
  },
  {
    name: "ReadAsciiCharacter",
    signature: "Number.a = ReadAsciiCharacter(#File)",
    documentation:
      "Read an ASCII character (1 byte) from a file, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadByte",
    signature: "Number.b = ReadByte(#File)",
    documentation:
      "Read a byte (1 byte) from a file, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadCharacter",
    signature: "Result.c = ReadCharacter(#File [, Format])",
    documentation:
      "Read a character from a file, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadDouble",
    signature: "Number.d = ReadDouble(#File)",
    documentation:
      "Read a double (8 bytes) from a file, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadFile",
    signature: "Result = ReadFile(#File, Filename$ [, Flags])",
    documentation: "Open an existing file for read-only operations.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadFloat",
    signature: "Number.f = ReadFloat(#File)",
    documentation:
      "Read a float (4 bytes) from a file, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadInteger",
    signature: "Number.i = ReadInteger(#File)",
    documentation:
      "Read an integer (4 bytes in 32-bit executable, 8 bytes in 64-bit executable) from a file, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadLong",
    signature: "Number.l = ReadLong(#File)",
    documentation:
      "Read a long (4 bytes) from a file, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadQuad",
    signature: "Number.q = ReadQuad(#File)",
    documentation:
      "Read a quad (8 bytes) from a file, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadData",
    signature: "Result = ReadData(#File, *MemoryBuffer, LengthToRead)",
    documentation:
      "Read the content from the file to the specified memory buffer, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadString",
    signature: "Text\\$ = ReadString(#File [, Flags [, Length]])",
    documentation:
      "Read a string from a file until an ’End Of Line’ or a ’Null’ character is found (Unix, DOS and Macintosh file formats are supported).",
    category: "File",
    returnType: "",
  },
  {
    name: "ReadStringFormat",
    signature: "Result = ReadStringFormat(#File)",
    documentation:
      "Checks if the current file position contains a BOM (Byte Order Mark) and tries to identify the String encoding used in the file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadUnicodeCharacter",
    signature: "Number.u = ReadUnicodeCharacter(#File)",
    documentation:
      "Read a unicode character (2 bytes) from a file, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "ReadWord",
    signature: "Number.w = ReadWord(#File)",
    documentation:
      "Read a word (2 bytes) from a file, starting at the current file position.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteAsciiCharacter",
    signature: "Result = WriteAsciiCharacter(#File, Number.a)",
    documentation: "Write an ASCII character (1 byte) to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteByte",
    signature: "Result = WriteByte(#File, Number.b)",
    documentation: "Write a byte number (1 byte) to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteCharacter",
    signature: "Result = WriteCharacter(#File, Character.c [, Format])",
    documentation:
      "Write a character number (1 byte in ASCII, 2 bytes in unicode ) to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteDouble",
    signature: "Result = WriteDouble(#File, Number.d)",
    documentation: "Write a double number (8 bytes) to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteFloat",
    signature: "Result = WriteFloat(#File, Number.f)",
    documentation: "Write a float number (4 bytes) to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteInteger",
    signature: "Result = WriteInteger(#File, Number)",
    documentation:
      "Write an integer number (4 bytes in 32-bit executable, 8 bytes in 64-bit executable) to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteLong",
    signature: "Result = WriteLong(#File, Number)",
    documentation: "Write a long number (4 bytes) to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteData",
    signature: "Result = WriteData(#File, *MemoryBuffer, Length)",
    documentation:
      "Write the content of the specified memory buffer to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteQuad",
    signature: "Result = WriteQuad(#File, Number.q)",
    documentation: "Write a quad number (8 bytes) to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteString",
    signature: "Result = WriteString(#File, Text$ [, Format])",
    documentation: "Write a string to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteStringFormat",
    signature: "Result = WriteStringFormat(#File, Format)",
    documentation:
      "Writes a BOM (Byte Order Mark) at the current position in the file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteStringN",
    signature: "Result = WriteStringN(#File, Text$ [, Format])",
    documentation:
      "Write a string to a file and add an ’end of line’ character.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteUnicodeCharacter",
    signature: "Result = WriteUnicodeCharacter(#File, Number)",
    documentation: "Write a unicode character (2 bytes) to a file.",
    category: "File",
    returnType: "i",
  },
  {
    name: "WriteWord",
    signature: "Result = WriteWord(#File, Number)",
    documentation: "Write a word number (2 bytes) to a file.",
    category: "File",
    returnType: "i",
  },
  // ── FileSystem ───────────────────────────────────────
  {
    name: "CopyDirectory",
    signature:
      "Result = CopyDirectory(SourceDirectory$, DestinationDirectory$,",
    documentation:
      "Copy the contents of the source directory to the destination.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "CopyFile",
    signature: "Result = CopyFile(SourceFilename$, DestinationFilename$)",
    documentation: "Copy the source file to the destination.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "CreateDirectory",
    signature: "Result = CreateDirectory(DirectoryName$)",
    documentation: "Creates a new directory.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "DeleteDirectory",
    signature: "Result = DeleteDirectory(Directory$, Pattern$ [, Mode])",
    documentation:
      "Deletes the specified Directory$ or files in that Directory$ matching the provided pattern.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "DeleteFile",
    signature: "Result = DeleteFile(Filename$ [, Mode])",
    documentation: "Deletes the specified file.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "DirectoryEntryAttributes",
    signature: "Attributes = DirectoryEntryAttributes(#Directory)",
    documentation:
      "Returns the attributes of the current entry in the directory being listed with ExamineDirectory() and NextDirectoryEntry() functions.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "DirectoryEntryDate",
    signature: "Result = DirectoryEntryDate(#Directory, DateType)",
    documentation:
      "Returns the date of the current entry in the directory being listed with ExamineDirectory() and NextDirectoryEntry() functions.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "DirectoryEntryName",
    signature: "Filename\\$ = DirectoryEntryName(#Directory)",
    documentation:
      "Returns the name of the current entry in the directory being listed with ExamineDirectory() and NextDirectoryEntry() functions.",
    category: "FileSystem",
    returnType: "",
  },
  {
    name: "DirectoryEntryType",
    signature: "Result = DirectoryEntryType(#Directory)",
    documentation:
      "Returns the type of the current entry in the directory being listed with ExamineDirectory() and NextDirectoryEntry() functions.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "DirectoryEntrySize",
    signature: "Size.q = DirectoryEntrySize(#Directory)",
    documentation:
      "Returns the size of the current entry in the directory being listed with ExamineDirectory() and NextDirectoryEntry() functions.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "ExamineDirectory",
    signature:
      "Result = ExamineDirectory(#Directory, DirectoryName$, Pattern$)",
    documentation:
      "Start to examine a directory for listing with the functions NextDirectoryEntry() , DirectoryEntryName() and DirectoryEntryType() .",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "FinishDirectory",
    signature: "FinishDirectory(#Directory)",
    documentation:
      "Finish the enumeration started with ExamineDirectory() . This frees the resources associated with the #Directory listing.",
    category: "FileSystem",
    returnType: "",
  },
  {
    name: "GetExtensionPart",
    signature: "Extension\\$ = GetExtensionPart(FullPathName$)",
    documentation: "Retrieves the file extension part of a full path.",
    category: "FileSystem",
    returnType: "",
  },
  {
    name: "GetFilePart",
    signature: "Filename\\$ = GetFilePart(FullPathName$ [, Mode])",
    documentation: "Retrieves the file part of a full path.",
    category: "FileSystem",
    returnType: "",
  },
  {
    name: "GetPathPart",
    signature: "Path\\$ = GetPathPart(FullPathName$)",
    documentation: "Retrieves the path part of a full path.",
    category: "FileSystem",
    returnType: "",
  },
  {
    name: "IsDirectory",
    signature: "Result = IsDirectory(#Directory)",
    documentation:
      "Tests if the given directory number is a valid and correctly initialized directory enumeration.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "CheckFilename",
    signature: "Result = CheckFilename(Filename$)",
    documentation:
      "Checks if the specified Filename$ doesn’t contain invalid characters for the file-system. For example, on Windows ’/’ and ’\\’ characters are not allowed in the filename.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "FileSize",
    signature: "Result.q = FileSize(Filename$)",
    documentation:
      "Returns the size of the specified file. This function can also be used to check if a file or directory exists or not.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "GetCurrentDirectory",
    signature: "Result\\$ = GetCurrentDirectory()",
    documentation: "Returns the current directory for the program.",
    category: "FileSystem",
    returnType: "",
  },
  {
    name: "GetHomeDirectory",
    signature: "Result\\$ = GetHomeDirectory()",
    documentation:
      "Returns the home directory path of the currently logged user.",
    category: "FileSystem",
    returnType: "",
  },
  {
    name: "GetUserDirectory",
    signature: "Result\\$ = GetUserDirectory(Type)",
    documentation:
      "Returns the directory path of the specified directory type.",
    category: "FileSystem",
    returnType: "",
  },
  {
    name: "GetTemporaryDirectory",
    signature: "Result\\$ = GetTemporaryDirectory()",
    documentation: "Returns the temporary directory name.",
    category: "FileSystem",
    returnType: "",
  },
  {
    name: "GetFileDate",
    signature: "Result = GetFileDate(Filename$, DateType)",
    documentation: "Returns the date of the specified file.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "GetFileAttributes",
    signature: "Attributes = GetFileAttributes(Filename$)",
    documentation: "Returns the attributes of the given file.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "NextDirectoryEntry",
    signature: "Result = NextDirectoryEntry(#Directory)",
    documentation:
      "This function must be called after an ExamineDirectory() . It will go step-by-step into the directory and list its contents.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "RenameFile",
    signature: "Result = RenameFile(OldFilename$, NewFilename$)",
    documentation: "Rename the old file to the new file.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "SetFileDate",
    signature: "Result = SetFileDate(Filename$, DateType, Date)",
    documentation: "Changes the date of the specified file.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "SetFileAttributes",
    signature: "Result = SetFileAttributes(Filename$, Attributes)",
    documentation: "Set the attributes of the given Filename$.",
    category: "FileSystem",
    returnType: "i",
  },
  {
    name: "SetCurrentDirectory",
    signature: "Result = SetCurrentDirectory(Directory$)",
    documentation: "Changes the current directory for the program.",
    category: "FileSystem",
    returnType: "i",
  },
  // ── Font ───────────────────────────────────────
  {
    name: "FreeFont",
    signature: "FreeFont(#Font)",
    documentation: "Free the given Font, previously loaded with LoadFont() .",
    category: "Font",
    returnType: "",
  },
  {
    name: "FontID",
    signature: "FontID = FontID(#Font)",
    documentation: "Returns the unique system identifier of the #Font.",
    category: "Font",
    returnType: "i",
  },
  {
    name: "IsFont",
    signature: "Result = IsFont(#Font)",
    documentation:
      "Tests if the given #Font is a valid and correctly initialized font.",
    category: "Font",
    returnType: "i",
  },
  {
    name: "LoadFont",
    signature: "Result = LoadFont(#Font, Name$, YSize [, Flags])",
    documentation: "Tries to open the specified font.",
    category: "Font",
    returnType: "i",
  },
  {
    name: "RegisterFontFile",
    signature: "Result = RegisterFontFile(FileName$)",
    documentation:
      "Register a font file for use with the LoadFont() command. All fonts contained in the file are then available.",
    category: "Font",
    returnType: "i",
  },
  // ── Ftp ───────────────────────────────────────
  {
    name: "AbortFTPFile",
    signature: "AbortFTPFile(#Ftp)",
    documentation:
      "Aborts the current background file transfer previously started with SendFTPFile() or ReceiveFTPFile() . If no file transfer is in progress, this function has no effect.",
    category: "Ftp",
    returnType: "",
  },
  {
    name: "CheckFTPConnection",
    signature: "Result = CheckFTPConnection(#Ftp)",
    documentation:
      "Checks if the specified #Ftp connection is still connected to the server.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "CloseFTP",
    signature: "CloseFTP(#Ftp)",
    documentation:
      "Closes the specified #Ftp client connection previously opened with OpenFTP() and free any associated resources.",
    category: "Ftp",
    returnType: "",
  },
  {
    name: "CreateFTPDirectory",
    signature: "Result = CreateFTPDirectory(#Ftp, Directory$)",
    documentation: "Creates a new directory on the FTP server.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "DeleteFTPDirectory",
    signature: "Result = DeleteFTPDirectory(#Ftp, Directory$)",
    documentation: "Deletes a directory on the FTP server.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "DeleteFTPFile",
    signature: "Result = DeleteFTPFile(#Ftp, Filename$)",
    documentation: "Deletes a file on the FTP server.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "ExamineFTPDirectory",
    signature: "Result = ExamineFTPDirectory(#Ftp)",
    documentation:
      "Starts to examine the content of the current FTP directory.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "GetFTPDirectory",
    signature: "Result\\$ = GetFTPDirectory(#Ftp)",
    documentation: "Returns the current FTP directory.",
    category: "Ftp",
    returnType: "",
  },
  {
    name: "FinishFTPDirectory",
    signature: "FinishFTPDirectory(#Ftp)",
    documentation:
      "Finishes the enumeration started with ExamineFTPDirectory() . This allows to free the resources associated with the FTP listing.",
    category: "Ftp",
    returnType: "",
  },
  {
    name: "FTPDirectoryEntryAttributes",
    signature: "Attributes = FTPDirectoryEntryAttributes(#Ftp)",
    documentation:
      "Returns the attributes of the current entry in the FTP enumeration being listed with the ExamineFTPDirectory() and NextFTPDirectoryEntry() functions.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "FTPDirectoryEntryDate",
    signature: "Result = FTPDirectoryEntryDate(#Ftp)",
    documentation:
      "Returns the date of the current entry in the FTP enumeration being listed with ExamineFTPDirectory() and NextFTPDirectoryEntry() functions.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "FTPDirectoryEntryName",
    signature: "Filename\\$ = FTPDirectoryEntryName(#Ftp)",
    documentation:
      "Returns the name of the current entry in the FTP enumeration being listed with ExamineFTPDirectory() and NextFTPDirectoryEntry() functions.",
    category: "Ftp",
    returnType: "",
  },
  {
    name: "FTPDirectoryEntryType",
    signature: "Result = FTPDirectoryEntryType(#Ftp)",
    documentation:
      "Returns the type of the current entry in the FTP enumeration being listed with ExamineFTPDirectory() and NextFTPDirectoryEntry() functions.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "FTPDirectoryEntryRaw",
    signature: "Entry\\$ = FTPDirectoryEntryRaw(#Ftp)",
    documentation:
      "Returns the raw line of the current entry in the FTP enumeration being listed with ExamineFTPDirectory() and NextFTPDirectoryEntry() functions, as it has been sent by the FTP server. It can be useful when the server isn’t supported by ExamineFTPDirectory() , so the",
    category: "Ftp",
    returnType: "",
  },
  {
    name: "FTPDirectoryEntrySize",
    signature: "Size = FTPDirectoryEntrySize(#Ftp)",
    documentation:
      "Returns the size of the current entry in the FTP enumeration being listed with ExamineFTPDirectory() and NextFTPDirectoryEntry() functions.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "FTPProgress",
    signature: "Result.q = FTPProgress(#Ftp)",
    documentation:
      "Returns the progress of the current file transfer, started either with ReceiveFTPFile() or SendFTPFile() .",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "IsFtp",
    signature: "Result = IsFtp(#Ftp)",
    documentation:
      "Tests if the given #Ftp number is a valid and correctly initialized ftp client.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "NextFTPDirectoryEntry",
    signature: "Result = NextFTPDirectoryEntry(#Ftp)",
    documentation:
      "Moves to the next entry in an enumeration started with ExamineFTPDirectory() .",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "OpenFTP",
    signature:
      "Result = OpenFTP(#Ftp, ServerName$, User$, Password$ [, Passive [,",
    documentation:
      "Tries to open a connection on the specified FTP or SFTP server.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "ReceiveFTPFile",
    signature: "Result = ReceiveFTPFile(#Ftp, RemoteFilename$, Filename$ [,",
    documentation: "Receives a file from a FTP server.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "RenameFTPFile",
    signature: "Result = RenameFTPFile(#Ftp, Filename$, NewFilename$)",
    documentation: "Renames a file on the FTP server.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "SendFTPFile",
    signature: "Result = SendFTPFile(#Ftp, Filename$, RemoteFilename$ [,",
    documentation: "Sends a file to a FTP server.",
    category: "Ftp",
    returnType: "i",
  },
  {
    name: "SetFTPDirectory",
    signature: "Result = SetFTPDirectory(#Ftp, Directory$)",
    documentation:
      "Changes the current #Ftp directory, relative to the current directory.",
    category: "Ftp",
    returnType: "i",
  },
  // ── Gadget ───────────────────────────────────────
  {
    name: "AddGadgetColumn",
    signature: "AddGadgetColumn(#Gadget, Position, Title$, Width)",
    documentation: "Adds a new column to the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "AddGadgetItem",
    signature: "Result = AddGadgetItem(#Gadget, Position, Text$ [, ImageID [,",
    documentation: "Add a new item to the specified gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ButtonImageGadget",
    signature:
      "Result = ButtonImageGadget(#Gadget, x, y, Width, Height, ImageID [,",
    documentation:
      "Create a button gadget with an image in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ButtonGadget",
    signature:
      "Result = ButtonGadget(#Gadget, x, y, Width, Height, Text$ [, Flags])",
    documentation: "Create a button gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "CalendarGadget",
    signature:
      "Result = CalendarGadget(#Gadget, x, y, Width, Height [, Date [,",
    documentation:
      "Create a calendar gadget in the current GadgetList. This gadget displays a month calendar and lets the user select a date.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "CanvasGadget",
    signature: "Result = CanvasGadget(#Gadget, x, y, Width, Height [, Flags])",
    documentation:
      "Create a canvas gadget in the current GadgetList. This gadget provides a drawing surface without alpha channel and events for mouse and keyboard interaction to easily create custom views.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "CanvasOutput",
    signature: "OutputID = CanvasOutput(#Gadget)",
    documentation:
      "Returns the OutputID of a CanvasGadget to perform 2D rendering operation on it.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "CanvasVectorOutput",
    signature: "VectorOutputID = CanvasVectorOutput(#Gadget [, Unit])",
    documentation:
      "Returns the OutputID of a CanvasGadget to perform vector drawing operations on it.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "OpenGLGadget",
    signature: "Result = OpenGLGadget(#Gadget, x, y, Width, Height [, Flags])",
    documentation:
      "Creates an OpenGL gadget in the current GadgetList. This gadget provides an OpenGL drawing context and events for mouse and keyboard interaction to easily create 3D opengl view. Most of the OpenGL commands are directly available in PureBasic using the underscore API notation",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "CheckBoxGadget",
    signature: "Result = CheckBoxGadget(#Gadget, x, y, Width, Height, Text$ [,",
    documentation: "Create a checkbox gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ClearGadgetItems",
    signature: "ClearGadgetItems(#Gadget)",
    documentation: "Clears all the items from the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "CloseGadgetList",
    signature: "CloseGadgetList()",
    documentation:
      "Terminate the current gadget list creation and go back to the previous GadgetList.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "ComboBoxGadget",
    signature:
      "Result = ComboBoxGadget(#Gadget, x, y, Width, Height [, Flags])",
    documentation: "Create a ComboBox gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ContainerGadget",
    signature:
      "Result = ContainerGadget(#Gadget, x, y, Width, Height [, Flags])",
    documentation:
      "Creates a container gadget in the current GadgetList. It’s a simple panel gadget which can contain other gadgets.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "CountGadgetItems",
    signature: "Result = CountGadgetItems(#Gadget)",
    documentation: "Returns the number of items in the specified gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "DateGadget",
    signature:
      "Result = DateGadget(#Gadget, x, y, Width, Height [, Mask$ [, Date",
    documentation:
      "Creates a String gadget in the current GadgetList, in which a date and/or time can be entered.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "DisableGadget",
    signature: "DisableGadget(#Gadget, State)",
    documentation: "Disable or enable the gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "EditorGadget",
    signature: "Result = EditorGadget(#Gadget, x, y, Width, Height [, Flags])",
    documentation: "Creates an Editor gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ExplorerComboGadget",
    signature: "Result = ExplorerComboGadget(#Gadget, x, y, Width, Height,",
    documentation:
      "Creates a ComboBox that lets you display a path and all its parent folders, so the user can choose one of them. You can find such a ComboBox, for example, in the OpenFileRequester() .",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ExplorerListGadget",
    signature: "Result = ExplorerListGadget(#Gadget, x, y, Width, Height,",
    documentation:
      "Creates a listing of a directory just as Explorer does. It lets the user choose a file or a folder and (if you do not prevent it by a flag) navigate through the whole directory tree.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ExplorerTreeGadget",
    signature: "Result = ExplorerTreeGadget(#Gadget, x, y, Width, Height,",
    documentation:
      "Creates a tree listing of the directory tree just as Explorer does. It lets the user navigate through his file-system, and choose a file or folder.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "FrameGadget",
    signature:
      "Result = FrameGadget(#Gadget, x, y, Width, Height, Text$ [, Flags])",
    documentation:
      "Creates a Frame gadget in the current GadgetList. This kind of gadget is decorative only.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "FreeGadget",
    signature: "FreeGadget(#Gadget)",
    documentation:
      "Free and remove the gadget from the display (and free its gadgetlist if the gadget was a container).",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "GadgetID",
    signature: "GadgetID = GadgetID(#Gadget)",
    documentation: "Returns the unique system identifier of the #Gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GadgetItemID",
    signature: "Result = GadgetItemID(#Gadget, Item)",
    documentation:
      "Returns the OS handle for the given item in a gadget. This is especially useful for use with the OS API.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GadgetToolTip",
    signature: "GadgetToolTip(#Gadget, Text$)",
    documentation:
      "Associate the specified Text$ with the #Gadget. A tooltip text is text which is displayed when the mouse cursor is over the gadget for a small amount of time (typically a yellow floating box).",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "GadgetX",
    signature: "Result = GadgetX(#Gadget [, Mode])",
    documentation: "Returns the X position of the specified gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GadgetY",
    signature: "Result = GadgetY(#Gadget [, Mode])",
    documentation: "Returns the Y position of the specified gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GadgetHeight",
    signature: "Result = GadgetHeight(#Gadget [, Mode])",
    documentation: "Returns the height of the specified gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GadgetType",
    signature: "Result = GadgetType(#Gadget)",
    documentation:
      "Returns the type of gadget that is represented by the specified gadget number. It can be useful to write generic functions that work with more than one type of gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GadgetWidth",
    signature: "Result = GadgetWidth(#Gadget [, Mode])",
    documentation: "Returns the width of the specified gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetActiveGadget",
    signature: "Result = GetActiveGadget()",
    documentation:
      "Returns the gadget number of the Gadget that currently has the keyboard focus.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetGadgetAttribute",
    signature: "Value = GetGadgetAttribute(#Gadget, Attribute)",
    documentation: "Gets an attribute value of the specified gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetGadgetColor",
    signature: "Color = GetGadgetColor(#Gadget, ColorType)",
    documentation: "Returns a color setting from the specified gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetGadgetData",
    signature: "Result = GetGadgetData(#Gadget)",
    documentation:
      "Returns the ’Data’ value that has been stored for this gadget with the SetGadgetData() function. This allows to associate a custom value with any gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetGadgetFont",
    signature: "FontID = GetGadgetFont(#Gadget)",
    documentation: "Get the FontID associated with the specified gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetGadgetItemAttribute",
    signature:
      "Value = GetGadgetItemAttribute(#Gadget, Item, Attribute [, Column])",
    documentation: "Gets an attribute value of the specified gadget item.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetGadgetItemColor",
    signature:
      "Color = GetGadgetItemColor(#Gadget, Item, ColorType [, Column])",
    documentation: "Returns a color setting from the specified gadget item.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetGadgetItemData",
    signature: "Result = GetGadgetItemData(#Gadget, Item)",
    documentation:
      "Returns the value that was previously stored with this gadget item with the SetGadgetItemData() function. This allows to associate a custom value with the items of a gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetGadgetState",
    signature: "Result = GetGadgetState(#Gadget)",
    documentation: "Returns the current state of the gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetGadgetItemText",
    signature: "Result\\$ = GetGadgetItemText(#Gadget, Item [, Column])",
    documentation: "Returns the item text of the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "GetGadgetItemState",
    signature: "Result = GetGadgetItemState(#Gadget, Item)",
    documentation: "Returns the item state of the specified gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "GetGadgetText",
    signature: "String\\$ = GetGadgetText(#Gadget)",
    documentation: "Returns the gadget text content of the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "HideGadget",
    signature: "HideGadget(#Gadget, State)",
    documentation: "Hide or show a gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "HyperLinkGadget",
    signature:
      "Result = HyperLinkGadget(#Gadget, x, y, Width, Height, Text$, Color",
    documentation:
      "Creates an HyperLink gadget in the current GadgetList. A hyperlink gadget is a text area which reacts to the mouse pointer by changing its color and the cursor shape.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ImageGadget",
    signature: "Result = ImageGadget(#Gadget, x, y, Width, Height, ImageID [,",
    documentation: "Creates an Image gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "IPAddressGadget",
    signature: "Result = IPAddressGadget(#Gadget, x, y, Width, Height)",
    documentation:
      "Creates an IPAddress gadget in the current GadgetList. It allows you to easily enter a full IPv4 address.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "IsGadget",
    signature: "Result = IsGadget(#Gadget)",
    documentation:
      "Tests if the given gadget number is a valid and correctly initialized gadget.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ListIconGadget",
    signature: "Result = ListIconGadget(#Gadget, x, y, Width, Height,",
    documentation: "Creates a ListIcon gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ListViewGadget",
    signature:
      "Result = ListViewGadget(#Gadget, x, y, Width, Height [, Flags])",
    documentation: "Creates a ListView gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "MDIGadget",
    signature:
      "Result = MDIGadget(#Gadget, x, y, Width, Height, SubMenu, MenuItem",
    documentation:
      "Creates a client area, in which child windows can be displayed. These child windows are fully movable and sizable by the user in this area.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "OpenGadgetList",
    signature: "OpenGadgetList(#Gadget [, Item])",
    documentation:
      "Use the specified gadget as a GadgetList, to dynamically add new gadgets to it.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "OptionGadget",
    signature: "Result = OptionGadget(#Gadget, x, y, Width, Height, Text$)",
    documentation: "Creates an OptionGadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "PanelGadget",
    signature: "Result = PanelGadget(#Gadget, x, y, Width, Height)",
    documentation: "Creates a Panel gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ProgressBarGadget",
    signature:
      "Result = ProgressBarGadget(#Gadget, x, y, Width, Height, Minimum,",
    documentation: "Creates a ProgressBar gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "RemoveGadgetColumn",
    signature: "RemoveGadgetColumn(#Gadget, Column)",
    documentation: "Removes a column of the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "RemoveGadgetItem",
    signature: "RemoveGadgetItem(#Gadget, Position)",
    documentation: "Removes an item of the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "ResizeGadget",
    signature: "ResizeGadget(#Gadget, x, y, Width, Height)",
    documentation:
      "Resize the specified gadget to the given position and dimensions.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "ScrollBarGadget",
    signature:
      "Result = ScrollBarGadget(#Gadget, x, y, Width, Height, Minimum,",
    documentation: "Creates a scrollbar gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "ScrollAreaGadget",
    signature: "Result = ScrollAreaGadget(#Gadget, x, y, Width, Height,",
    documentation:
      "Creates a ScrollArea gadget in the current GadgetList. It is a container for other gadgets with a scrollable area.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "SetActiveGadget",
    signature: "SetActiveGadget(#Gadget)",
    documentation:
      "Activates (sets the keyboard focus on) the gadget specified by the given gadget number. Activating a gadget allows it to become the current object to receive messages and handle keystrokes.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetAttribute",
    signature: "SetGadgetAttribute(#Gadget, Attribute, Value)",
    documentation: "Changes an attribute value of the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetColor",
    signature: "SetGadgetColor(#Gadget, ColorType, Color)",
    documentation: "Changes a color attribute on the given gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetData",
    signature: "SetGadgetData(#Gadget, Value)",
    documentation:
      "Stores the given value with the specified gadget. This value can later be read with the GetGadgetData() function. This allows to associate a custom value with any gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetFont",
    signature: "SetGadgetFont(#Gadget, FontID)",
    documentation: "Changes the font of the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetItemAttribute",
    signature:
      "SetGadgetItemAttribute(#Gadget, Item, Attribute, Value [, Column])",
    documentation: "Changes an attribute value of the specified gadget item.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetItemColor",
    signature: "SetGadgetItemColor(#Gadget, Item, ColorType, Color [, Column])",
    documentation: "Changes a color attribute of the given gadget item.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetItemData",
    signature: "SetGadgetItemData(#Gadget, Item, Value)",
    documentation:
      "Stores the given value with the specified gadget item. This value can later be read with the GetGadgetItemData() function. This allows to associate a custom value with the items of a gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetItemImage",
    signature: "SetGadgetItemImage(#Gadget, Item, ImageID)",
    documentation: "Changes the image of the specified gadget item.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetItemState",
    signature: "SetGadgetItemState(#Gadget, Item, State)",
    documentation: "Changes the item state of the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetItemText",
    signature: "SetGadgetItemText(#Gadget, Item, Text$ [, Column])",
    documentation: "Changes the item text of the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetState",
    signature: "SetGadgetState(#Gadget, State)",
    documentation: "Change the current state of the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "SetGadgetText",
    signature: "SetGadgetText(#Gadget, Text$)",
    documentation: "Change the gadget text content of the specified gadget.",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "ShortcutGadget",
    signature:
      "Result = ShortcutGadget(#Gadget, x, y, Width, Height, Shortcut)",
    documentation:
      "Creates a gadget for keyboard shortcut selection in the current GadgetList. The user can select it and hold down a keyboard combination to select a new shortcut.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "SpinGadget",
    signature:
      "Result = SpinGadget(#Gadget, x, y, Width, Height, Minimum, Maximum",
    documentation: "Creates a spin gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "SplitterGadget",
    signature:
      "Result = SplitterGadget(#Gadget, x, y, Width, Height, #Gadget1,",
    documentation:
      "Creates a Splitter gadget in the current GadgetList. This gadget allows two child gadgets to be resized by the user with a separator bar.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "StringGadget",
    signature:
      "Result = StringGadget(#Gadget, x, y, Width, Height, Content$ [,",
    documentation:
      "Creates a String gadget in the current GadgetList. It allows the user to enter a single line of text.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "TextGadget",
    signature:
      "Result = TextGadget(#Gadget, x, y, Width, Height, Text$ [, Flags])",
    documentation:
      "Creates a Text gadget in the current GadgetList. A TextGadget is a basic text area for displaying, not entering, text.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "TrackBarGadget",
    signature: "Result = TrackBarGadget(#Gadget, x, y, Width, Height, Minimum,",
    documentation:
      "Creates a TrackBar gadget in the current GadgetList. It allows you to select a range of values with a slide bar, like ones found in several multimedia players.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "TreeGadget",
    signature: "Result = TreeGadget(#Gadget, x, y, Width, Height [, Flags])",
    documentation: "Creates a Tree gadget in the current GadgetList.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "UseGadgetList",
    signature: "Result = UseGadgetList(WindowID)",
    documentation:
      "Selects the GadgetList window to which gadgets will be added. If there is no GadgetList on this window yet (because it was created with the #PB_Window_NoGadgets flag in OpenWindow() or because it is not a PB window) it will be created.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "WebGadget",
    signature:
      "Result = WebGadget(#Gadget, x, y, Width, Height, URL$ [, Flags])",
    documentation:
      "Creates a Web gadget in the current GadgetList. It can display html pages.",
    category: "Gadget",
    returnType: "i",
  },
  {
    name: "BindGadgetEvent",
    signature: "BindGadgetEvent(#Gadget, @Callback() [, EventType])",
    documentation:
      "Bind a gadget event to a callback. It’s an additional way to handle events in PureBasic, which works without problem with the regulars WindowEvent() / WaitWindowEvent() commands. It also allows to have real-time event notifications as the callback can be invoked as soon as the event",
    category: "Gadget",
    returnType: "",
  },
  {
    name: "UnbindGadgetEvent",
    signature: "UnbindGadgetEvent(#Gadget, @Callback() [, EventType])",
    documentation:
      "Unbind a gadget event from a callback. If no matching event callback is found, this command has no effect.",
    category: "Gadget",
    returnType: "",
  },
  // ── Gadget3D ───────────────────────────────────────
  {
    name: "AddGadgetItem3D",
    signature: "AddGadgetItem3D(#Gadget3D, Position, Text$)",
    documentation: "Add an item to the specified #Gadget3D.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "ButtonGadget3D",
    signature: "Result = ButtonGadget3D(#Gadget3D, x, y, Width, Height, Text$)",
    documentation: "Creates a button gadget in the current GadgetList.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "CheckBoxGadget3D",
    signature:
      "Result = CheckBoxGadget3D(#Gadget3D, x, y, Width, Height, Text$)",
    documentation: "Creates a checkbox gadget in the current GadgetList.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "ClearGadgetItems3D",
    signature: "ClearGadgetItems3D(#Gadget3D)",
    documentation: "Clears all the items from the specified #Gadget3D.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "CloseGadgetList3D",
    signature: "CloseGadgetList3D()",
    documentation:
      "Closes the current gadget list creation and go back to the previous GadgetList.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "ComboBoxGadget3D",
    signature:
      "Result = ComboBoxGadget3D(#Gadget3D, x, y, Width, Height [, Flags])",
    documentation:
      "Creates a ComboBox gadget in the current GadgetList. Once a ComboBox is created, its list of items is empty.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "ContainerGadget3D",
    signature: "Result = ContainerGadget3D(#Gadget3D, x, y, Width, Height)",
    documentation:
      "Creates a container gadget in the current GadgetList. It’s a simple panel gadget which can contain other gadgets. Once the gadget is created, all future created gadgets will be created inside the container. When all the needed gadgets have been created, CloseGadgetList3D() must be called to",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "CountGadgetItems3D",
    signature: "Result = CountGadgetItems3D(#Gadget3D)",
    documentation: "Returns the number of items in the specified #Gadget3D.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "DisableGadget3D",
    signature: "DisableGadget3D(#Gadget3D, State)",
    documentation: "Disable or enable the gadget.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "EditorGadget3D",
    signature:
      "Result = EditorGadget3D(#Gadget3D, x, y, Width, Height [, Flags])",
    documentation: "Creates an editor gadget in the current GadgetList.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "FrameGadget3D",
    signature: "Result = FrameGadget3D(#Gadget3D, x, y, Width, Height, Text$)",
    documentation:
      "Creates a frame gadget in the current GadgetList. This kind of gadget is decorative only.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "FreeGadget3D",
    signature: "FreeGadget3D(#Gadget3D)",
    documentation:
      "Free and remove the 3D gadget from the display (and free its gadgetlist if the gadget was a container).",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "GadgetID3D",
    signature: "GadgetID = GadgetID3D(#Gadget3D)",
    documentation: "Returns the unique system identifier of the 3D gadget.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GadgetToolTip3D",
    signature: "GadgetToolTip3D(#Gadget3D, Text$)",
    documentation:
      "Associates the specified Text$ with the 3D gadget. A tooltip text is text which is displayed when the mouse cursor is over the gadget for a small amount of time (typically a yellow floating box).",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "GadgetX3D",
    signature: "Result = GadgetX3D(#Gadget3D)",
    documentation: "Returns the X position of the specified 3D gadget.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GadgetY3D",
    signature: "Result = GadgetY3D(#Gadget3D)",
    documentation: "Returns the Y position of the specified 3D gadget.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GadgetHeight3D",
    signature: "Result = GadgetHeight3D(#Gadget3D)",
    documentation: "Returns the height of the specified 3D gadget.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GadgetType3D",
    signature: "Result = GadgetType3D(#Gadget3D)",
    documentation:
      "Returns the type of gadget that is represented by the specified 3D gadget. It can be useful to write generic functions that work with more than one type of gadget.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GadgetWidth3D",
    signature: "Result = GadgetWidth3D(#Gadget3D)",
    documentation: "Returns the width of the specified 3D gadget.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GetActiveGadget3D",
    signature: "Result = GetActiveGadget3D()",
    documentation:
      "Returns the #Gadget3D number of the Gadget that currently has the keyboard focus.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GetGadgetAttribute3D",
    signature: "Value = GetGadgetAttribute3D(#Gadget3D, Attribute)",
    documentation: "Gets the attribute value of the specified 3D gadget.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GetGadgetData3D",
    signature: "Result = GetGadgetData3D(#Gadget3D)",
    documentation:
      "Returns the data value that has been stored for this gadget with the SetGadgetData3D() function. This allows to associate a custom value with any gadget.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GetGadgetItemData3D",
    signature: "Result = GetGadgetItemData3D(#Gadget3D, Item)",
    documentation:
      "Returns the value that was previously stored with this 3D gadget item with the SetGadgetItemData3D() function. This allows to associate a custom value with the items of a gadget.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GetGadgetState3D",
    signature: "Result = GetGadgetState3D(#Gadget3D)",
    documentation: "Returns the current state of the 3D gadget.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GetGadgetItemText3D",
    signature: "Result\\$ = GetGadgetItemText3D(#Gadget3D, Item [, Column])",
    documentation: "Returns the item text of the specified 3D gadget item.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "GetGadgetItemState3D",
    signature: "Result = GetGadgetItemState3D(#Gadget3D, Item)",
    documentation: "Returns the item state of the specified 3D gadget item.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "GetGadgetText3D",
    signature: "String\\$ = GetGadgetText3D(#Gadget3D)",
    documentation: "Returns the text content of the specified 3D gadget.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "HideGadget3D",
    signature: "HideGadget3D(#Gadget3D, State)",
    documentation: "Hide or show a 3D gadget.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "ImageGadget3D",
    signature:
      "Result = ImageGadget3D(#Gadget3D, x, y, Width, Height, TextureID [,",
    documentation: "Creates an image gadget in the current GadgetList.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "IsGadget3D",
    signature: "Result = IsGadget3D(#Gadget3D)",
    documentation:
      "Tests if the given 3D gadget is valid and correctly initialized.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "ListViewGadget3D",
    signature: "Result = ListViewGadget3D(#Gadget3D, x, y, Width, Height)",
    documentation:
      "Creates a ListView gadget in the current GadgetList. Once a ListView is created, its list of items is empty.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "OpenGadgetList3D",
    signature: "OpenGadgetList3D(#Gadget3D [, Item])",
    documentation:
      "Use the specified 3D gadget as a GadgetList, to dynamically add new gadgets to it. Once the all the needed changes are done, CloseGadgetList3D() should be called.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "OptionGadget3D",
    signature: "Result = OptionGadget3D(#Gadget3D, x, y, Width, Height, Text$)",
    documentation:
      "Creates an OptionGadget in the current GadgetList. The first time this function is called, a group is created and all following calls of OptionGadget3D() will add a gadget to this group. To finish the group, just create a gadget of another type. These kind of gadgets are very useful as only one",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "PanelGadget3D",
    signature: "Result = PanelGadget3D(#Gadget3D, x, y, Width, Height)",
    documentation:
      "Creates a panel gadget in the current GadgetList. Once a panel is created, its list of panels is empty.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "ProgressBarGadget3D",
    signature: "Result = ProgressBarGadget3D(#Gadget3D, x, y, Width, Height,",
    documentation: "Creates a ProgressBar gadget in the current GadgetList.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "RemoveGadgetItem3D",
    signature: "RemoveGadgetItem3D(#Gadget3D, Position)",
    documentation:
      "Removes an item of the specified #Gadget3D at the given Position.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "ResizeGadget3D",
    signature: "ResizeGadget3D(#Gadget3D, x, y, Width, Height)",
    documentation:
      "Resize the specified 3D gadget to the given position and dimensions.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "ScrollBarGadget3D",
    signature:
      "Result = ScrollBarGadget3D(#Gadget3D, x, y, Width, Height, Minimum,",
    documentation:
      "Creates a scrollbar gadget in the current GadgetList. It’s widely used when displaying only a part of an object.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "ScrollAreaGadget3D",
    signature: "Result = ScrollAreaGadget3D(#Gadget3D, x, y, Width, Height,",
    documentation:
      "Creates a ScrollArea gadget in the current GadgetList. It’s very useful when a gadget is too big to fit the window dimension. In that case, it can be put into a scrollarea. All the scrolling is handled automatically by the gadget. This is a container gadget, intended to have one or several gadget in",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "SetActiveGadget3D",
    signature: "SetActiveGadget3D(#Gadget3D)",
    documentation:
      "Activates (sets the focus on) the gadget specified by the given #Gadget3D number. This is mainly used with ComboBoxGadget3D() and StringGadget3D() . Activating a gadget allows it to become the current object to receive messages and handle keystrokes.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "SetGadgetAttribute3D",
    signature: "SetGadgetAttribute3D(#Gadget3D, Attribute, Value)",
    documentation: "Changes the attribute value of the specified 3D gadget.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "SetGadgetData3D",
    signature: "SetGadgetData3D(#Gadget3D, Value)",
    documentation:
      "Stores the given value with the specified #Gadget3D. This value can later be read with the GetGadgetData3D() function. This allows to associate a custom value with any gadget.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "SetGadgetItemData3D",
    signature: "SetGadgetItemData3D(#Gadget3D, Item, Value)",
    documentation:
      "Stores the given value with the specified #Gadget3D item. This value can later be read with the GetGadgetItemData3D() function. This allows to associate a custom value with the items of a gadget. This value will remain with the item, even if the item changes its index (for example",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "SetGadgetItemState3D",
    signature: "SetGadgetItemState3D(#Gadget3D, Item, State)",
    documentation: "Changes the item state of the specified #Gadget3D.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "SetGadgetItemText3D",
    signature: "SetGadgetItemText3D(#Gadget3D, Item, Text$ [, Column])",
    documentation: "Changes the item text of the specified #Gadget3D.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "SetGadgetState3D",
    signature: "SetGadgetState3D(#Gadget3D, State)",
    documentation: "Changes the current state of the specified #Gadget3D.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "SetGadgetText3D",
    signature: "SetGadgetText3D(#Gadget3D, Text$)",
    documentation: "Change the gadget text content of the specified 3D gadget.",
    category: "Gadget3D",
    returnType: "",
  },
  {
    name: "SpinGadget3D",
    signature: "Result = SpinGadget3D(#Gadget3D, x, y, Width, Height, Minimum,",
    documentation: "Creates a spin gadget in the current GadgetList.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "StringGadget3D",
    signature:
      "Result = StringGadget3D(#Gadget3D, x, y, Width, Height, Content$ [,",
    documentation:
      "Creates a String gadget in the current GadgetList. This gadget accepts only one line of text. To get multi-line input, use the EditorGadget3D() function.",
    category: "Gadget3D",
    returnType: "i",
  },
  {
    name: "TextGadget3D",
    signature: "Result = TextGadget3D(#Gadget3D, x, y, Width, Height, Text$)",
    documentation:
      "Creates a text gadget in the current GadgetList. This is a basic text area for displaying, not entering, text.",
    category: "Gadget3D",
    returnType: "i",
  },
  // ── Help ───────────────────────────────────────
  {
    name: "CloseHelp",
    signature: "CloseHelp()",
    documentation: "Close the help window previously opened with OpenHelp() .",
    category: "Help",
    returnType: "",
  },
  {
    name: "OpenHelp",
    signature: "OpenHelp(Filename$, Topic$)",
    documentation: "Open and display a help window.",
    category: "Help",
    returnType: "",
  },
  // ── Http ───────────────────────────────────────
  {
    name: "AbortHTTP",
    signature: "AbortHTTP(HttpConnection)",
    documentation:
      "Aborts the progress of the specified asynchronous download, started either with ReceiveHTTPFile() or ReceiveHTTPMemory() . It’s also usable for HTTPRequest() and HTTPRequestMemory() (if #PB_HTTP_Asynchronous was used).",
    category: "Http",
    returnType: "",
  },
  {
    name: "FinishHTTP",
    signature: "Result = FinishHTTP(HttpConnection)",
    documentation:
      "Free the resources associated to the specified asynchronous download, started either with ReceiveHTTPFile() or ReceiveHTTPMemory() . It must be always called after a successful call of ReceiveHTTPFile() or ReceiveHTTPMemory() .",
    category: "Http",
    returnType: "i",
  },
  {
    name: "GetURLPart",
    signature: "Result\\$ = GetURLPart(URL$, Parameter$)",
    documentation:
      "Get a specific part of the given URL$. This can be a named parameter in the URL string or another part of the URL.",
    category: "Http",
    returnType: "",
  },
  {
    name: "HTTPProgress",
    signature: "Result = HTTPProgress(HttpConnection)",
    documentation:
      "Returns the progress of the specified asynchronous download, started either with ReceiveHTTPFile() or ReceiveHTTPMemory() .",
    category: "Http",
    returnType: "i",
  },
  {
    name: "HTTPInfo",
    signature: "Result\\$ = HTTPInfo(HttpRequest, Type [, Flags])",
    documentation:
      "Returns information about an HTTP request created with HTTPRequest() or HTTPRequestMemory() .",
    category: "Http",
    returnType: "",
  },
  {
    name: "HTTPMemory",
    signature: "*Buffer = HTTPMemory(HttpRequest)",
    documentation:
      "Returns a memory buffer containing the whole response of an HTTP request created with HTTPRequest() or HTTPRequestMemory() . Once done with it, the buffer needs to be freed with FreeMemory() . If the flag #PB_HTTP_Asynchronous was used when calling HTTPRequest() or",
    category: "Http",
    returnType: "",
  },
  {
    name: "HTTPProxy",
    signature: "HTTPProxy(URL$ [, User$, Password$])",
    documentation:
      "Specify a proxy to use for the following HTTP commands: ReceiveHTTPFile() , ReceiveHTTPMemory() , HTTPRequest() and HTTPRequestMemory() .",
    category: "Http",
    returnType: "",
  },
  {
    name: "HTTPTimeout",
    signature: "HTTPTimeout(ConnectTimeout [, GlobalTimeout])",
    documentation:
      "Specify timeout to use for the following HTTP commands: ReceiveHTTPFile() , ReceiveHTTPMemory() , HTTPRequest() and HTTPRequestMemory() .",
    category: "Http",
    returnType: "",
  },
  {
    name: "ReceiveHTTPFile",
    signature:
      "Result = ReceiveHTTPFile(URL$, Filename$ [, Flags [, UserAgent$]])",
    documentation: "Download a file to disk from the given URL$.",
    category: "Http",
    returnType: "i",
  },
  {
    name: "ReceiveHTTPMemory",
    signature: "*Buffer = ReceiveHTTPMemory(URL$ [, Flags [, UserAgent$]])",
    documentation:
      "Download a file to a new memory buffer from the given URL$.",
    category: "Http",
    returnType: "",
  },
  {
    name: "HTTPRequest",
    signature:
      "Result = HTTPRequest(Type, URL$ [, Data$ [, Flags [, Headers()]]])",
    documentation:
      "Send an HTTP request with optional text data. If binary data needs to be sent, HTTPRequestMemory() can be used. This command is designed to handle REST like web APIs easily. FinishHTTP() needs to be always called once the request has been executed.",
    category: "Http",
    returnType: "i",
  },
  {
    name: "HTTPRequestMemory",
    signature:
      "Result = HTTPRequestMemory(Type, URL$ [, *Data, DataSize [, Flags",
    documentation:
      "Send an HTTP request with optional binary data. If text only data needs to be sent HTTPRequest() can be used. This command is designed to handle REST like web API easily. FinishHTTP() needs to be always called once the request has been executed.",
    category: "Http",
    returnType: "i",
  },
  {
    name: "URLDecoder",
    signature: "Result\\$ = URLDecoder(URL$ [, Format])",
    documentation:
      "Returns a decoded URL$ which has been encoded with the HTTP format.",
    category: "Http",
    returnType: "",
  },
  {
    name: "URLEncoder",
    signature: "Result\\$ = URLEncoder(URL$ [, Format])",
    documentation: "Returns the URL$ encoded to the HTTP format.",
    category: "Http",
    returnType: "",
  },
  {
    name: "SetURLPart",
    signature: "Result\\$ = SetURLPart(URL$, Parameter$, Value$)",
    documentation: "Set a specific part of the given URL$.",
    category: "Http",
    returnType: "",
  },
  // ── Image ───────────────────────────────────────
  {
    name: "AddImageFrame",
    signature: "Result = AddImageFrame(#Image [, Index])",
    documentation:
      "Adds a new frame to the specified image. The new frame will have the same dimension and depth like the image.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "RemoveImageFrame",
    signature: "Result = RemoveImageFrame(#Image, Index)",
    documentation: "Removes the specified frame from the image.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "GetImageFrame",
    signature: "Index = GetImageFrame(#Image)",
    documentation: "Gets the current frame index of the image.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "SetImageFrame",
    signature: "SetImageFrame(#Image, Index)",
    documentation:
      "Changes the current frame of the image. If the image is not multi-frame, this function has no effect. ImageOutput() , ImageVectorOutput() , CopyImage() and GrabImage() works on the current frame.",
    category: "Image",
    returnType: "",
  },
  {
    name: "ImageFrameCount",
    signature: "Result = ImageFrameCount(#Image)",
    documentation: "Returns the number of frames of the image.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "GetImageFrameDelay",
    signature: "Result = GetImageFrameDelay(#Image)",
    documentation:
      "Returns the display delay (in milliseconds) for the current image frame. Each frame can have its own delay.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "SetImageFrameDelay",
    signature: "Result = SetImageFrameDelay(#Image, Delay)",
    documentation:
      "Sets the display delay (in milliseconds) for the current image frame. Each frame can have its own delay.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "CatchImage",
    signature: "Result = CatchImage(#Image, *MemoryAddress [, Size])",
    documentation: "Load the specified image from the given memory area.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "CopyImage",
    signature: "Result = CopyImage(#Image1, #Image2)",
    documentation:
      "Creates an identical copy of an image. If the image is multi-frame, the current frame will be used for the copy.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "CreateImage",
    signature:
      "Result = CreateImage(#Image, Width, Height [, Depth [, BackColor]])",
    documentation:
      "Create an empty image (with black background) which can be used to do rendering on it.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "EncodeImage",
    signature:
      "*Buffer = EncodeImage(#Image [, ImagePlugin [, Flags [, Depth]]])",
    documentation: "Encode the specified image into a memory buffer.",
    category: "Image",
    returnType: "",
  },
  {
    name: "FreeImage",
    signature: "FreeImage(#Image)",
    documentation:
      "Free the specified image and release its associated memory.",
    category: "Image",
    returnType: "",
  },
  {
    name: "GrabImage",
    signature: "Result = GrabImage(#Image1, #Image2, x, y, Width, Height)",
    documentation:
      "Create a new image with the selected area on the source image. If the image is multi-frame, the current frame will be used for the grab.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "ImageDepth",
    signature: "Result = ImageDepth(#Image [, Flags])",
    documentation:
      "Returns the depth of the #Image, as it is stored internally by PureBasic.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "ImageFormat",
    signature: "Result = ImageFormat(#Image)",
    documentation: "Return the original image format.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "ImageHeight",
    signature: "Result = ImageHeight(#Image)",
    documentation: "Returns the height of the given image.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "ImageID",
    signature: "Result = ImageID(#Image)",
    documentation: "Returns the ImageID of the image.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "ImageOutput",
    signature: "OutputID = ImageOutput(#Image)",
    documentation:
      "Returns the OutputID of the image to perform 2D rendering operation on it. Alternatively, the ImageVectorOutput() command can be used to perform vector drawing on the image. If the image is multi-frame, the current frame will be used.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "ImageVectorOutput",
    signature: "VectorOutputID = ImageVectorOutput(#Image [, Unit])",
    documentation:
      "Returns the OutputID of the image to perform 2D vector drawing operations on it. If the image is multi-frame, the current frame will be used.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "ImageWidth",
    signature: "Result = ImageWidth(#Image)",
    documentation: "Returns the width of the given image.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "IsImage",
    signature: "Result = IsImage(#Image)",
    documentation:
      "Tests if the given image number is a valid and correctly initialized image.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "LoadImage",
    signature: "Result = LoadImage(#Image, Filename$ [, Flags])",
    documentation: "Load the specified image from a file.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "ResizeImage",
    signature: "Result = ResizeImage(#Image, Width, Height [, Mode])",
    documentation: "Resize the #Image to the given dimension.",
    category: "Image",
    returnType: "i",
  },
  {
    name: "SaveImage",
    signature:
      "Result = SaveImage(#Image, Filename$ [, ImagePlugin [, Flags [,",
    documentation: "Saves the specified image to disk.",
    category: "Image",
    returnType: "i",
  },
  // ── ImagePlugin ───────────────────────────────────────
  {
    name: "UseGIFImageDecoder",
    signature: "UseGIFImageDecoder()",
    documentation:
      "Enables the GIF image support for the CatchImage() , LoadImage() , CatchSprite() and LoadSprite() functions. Only LoadImage() and CatchImage() support multi-frame GIF (it will result in a multi-frame image).",
    category: "ImagePlugin",
    returnType: "",
  },
  {
    name: "UseJPEGImageDecoder",
    signature: "UseJPEGImageDecoder()",
    documentation:
      "Enables the JPEG (Joint Picture Expert Group) image support for the CatchImage() , LoadImage() , CatchSprite() and LoadSprite() functions.",
    category: "ImagePlugin",
    returnType: "",
  },
  {
    name: "UseJPEGImageEncoder",
    signature: "UseJPEGImageEncoder()",
    documentation:
      "Enables the JPEG (Joint Picture Expert Group) image support for the SaveImage() and SaveSprite() functions.",
    category: "ImagePlugin",
    returnType: "",
  },
  {
    name: "UseJPEG2000ImageDecoder",
    signature: "UseJPEG2000ImageDecoder()",
    documentation:
      "Enables the JPEG 2000 image support for the CatchImage() , LoadImage() , CatchSprite() and LoadSprite() functions.",
    category: "ImagePlugin",
    returnType: "",
  },
  {
    name: "UseJPEG2000ImageEncoder",
    signature: "UseJPEG2000ImageEncoder()",
    documentation:
      "Enables the JPEG 2000 image support for the SaveImage() and SaveSprite() functions.",
    category: "ImagePlugin",
    returnType: "",
  },
  {
    name: "UsePNGImageDecoder",
    signature: "UsePNGImageDecoder()",
    documentation:
      "Enables the PNG (Portable Network Graphic) image support for the CatchImage() , LoadImage() , CatchSprite() and LoadSprite() functions.",
    category: "ImagePlugin",
    returnType: "",
  },
  {
    name: "UsePNGImageEncoder",
    signature: "UsePNGImageEncoder()",
    documentation:
      "Enables the PNG (Portable Network Graphic) image support for SaveImage() and SaveSprite() .",
    category: "ImagePlugin",
    returnType: "",
  },
  {
    name: "UseTGAImageDecoder",
    signature: "UseTGAImageDecoder()",
    documentation:
      "Enables the TGA (Targa) image support for the CatchImage() , LoadImage() , CatchSprite() and LoadSprite() functions.",
    category: "ImagePlugin",
    returnType: "",
  },
  {
    name: "UseTIFFImageDecoder",
    signature: "UseTIFFImageDecoder()",
    documentation:
      "Enables the TIFF image support for the CatchImage() , LoadImage() , CatchSprite() and LoadSprite() functions.",
    category: "ImagePlugin",
    returnType: "",
  },
  // ── Joint ───────────────────────────────────────
  {
    name: "EnableHingeJointAngularMotor",
    signature: "EnableHingeJointAngularMotor(#Joint, Enable, TargetVelocity,",
    documentation: "Enables the angular motor on the specified hinge joint.",
    category: "Joint",
    returnType: "",
  },
  {
    name: "HingeJointMotorTarget",
    signature: "HingeJointMotorTarget(#Joint, Angle, Velocity)",
    documentation: "Sets the specified hinge joint motor target.",
    category: "Joint",
    returnType: "",
  },
  {
    name: "FreeJoint",
    signature: "FreeJoint(#Joint)",
    documentation:
      "Frees the specified joint and releases all its associated memory. The joint must not be used (by using its number with the other functions in this library) after calling this function.",
    category: "Joint",
    returnType: "",
  },
  {
    name: "IsJoint",
    signature: "Result = IsJoint(#Joint)",
    documentation:
      "Tests if the given joint number is a valid and correctly initialized joint.",
    category: "Joint",
    returnType: "i",
  },
  {
    name: "GenericJoint",
    signature:
      "Result = GenericJoint(#Joint, EntityID, TransformX, TransformY,",
    documentation: "Creates a new joint, based on one or two points.",
    category: "Joint",
    returnType: "i",
  },
  {
    name: "PointJoint",
    signature:
      "Result = PointJoint(#Joint, EntityID, PivotX, PivotY, PivotZ [,",
    documentation: "Creates a new joint, based on one or two points.",
    category: "Joint",
    returnType: "i",
  },
  {
    name: "HingeJoint",
    signature: "Result = HingeJoint(#Joint, EntityID, PivotX, PivotY, PivotZ,",
    documentation:
      "Creates a new hinge joint between the two given entities. Hinge can be used to simulate door, moving bridge etc.",
    category: "Joint",
    returnType: "i",
  },
  {
    name: "ConeTwistJoint",
    signature:
      "Result = ConeTwistJoint(#Joint, EntityID, TransformX, TransformY,",
    documentation:
      "Creates a new cone twist joint between the two given entities. Cone twist can be used to attach arm or legs to body, etc.",
    category: "Joint",
    returnType: "i",
  },
  {
    name: "SliderJoint",
    signature: "Result = SliderJoint(#Joint, EntityID, TransformX, TransformY,",
    documentation:
      "Create a new slider joint between the two given entities. Slider can be used to move an entity with constraint on a plane surface, etc.",
    category: "Joint",
    returnType: "i",
  },
  {
    name: "GetJointAttribute",
    signature: "Result = GetJointAttribute(#Joint, Attribute)",
    documentation:
      "Get the specified attribute value of the given joint and its associated entities.",
    category: "Joint",
    returnType: "i",
  },
  {
    name: "SetJointAttribute",
    signature: "SetJointAttribute(#Joint, Attribute, Value [, Axis])",
    documentation:
      "Set the specified attribute value of the given joint and its associated entities.",
    category: "Joint",
    returnType: "",
  },
  // ── Joystick ───────────────────────────────────────
  {
    name: "InitJoystick",
    signature: "Result = InitJoystick()",
    documentation:
      "Initialize the joystick environment for later use. This function must be called before any other functions within this library.",
    category: "Joystick",
    returnType: "i",
  },
  {
    name: "ExamineJoystick",
    signature: "Result = ExamineJoystick(#Joystick)",
    documentation:
      "Updates the current joystick state. It needs to be called before using the following functions: JoystickButton() , JoystickAxisX() , JoystickAxisY() and JoystickAxisZ() .",
    category: "Joystick",
    returnType: "i",
  },
  {
    name: "JoystickAxisX",
    signature: "Result = JoystickAxisX(#Joystick [, Pad [, Mode]])",
    documentation: "Returns the joystick X axis state.",
    category: "Joystick",
    returnType: "i",
  },
  {
    name: "JoystickAxisY",
    signature: "Result = JoystickAxisY(#Joystick [, Pad [, Mode]])",
    documentation: "Returns the joystick Y axis state.",
    category: "Joystick",
    returnType: "i",
  },
  {
    name: "JoystickAxisZ",
    signature: "Result = JoystickAxisZ(#Joystick [, Pad [, Mode]])",
    documentation:
      "Returns the joystick Z axis state. This axis is often referred to as trigger on new gamepads.",
    category: "Joystick",
    returnType: "i",
  },
  {
    name: "JoystickName",
    signature: "Result\\$ = JoystickName(#Joystick)",
    documentation:
      "Returns the joystick’s name. It can be useful when having several joysticks connected, to identify the right one.",
    category: "Joystick",
    returnType: "",
  },
  {
    name: "JoystickButton",
    signature: "Result = JoystickButton(#Joystick, Button)",
    documentation: "Returns the joystick button state.",
    category: "Joystick",
    returnType: "i",
  },
  // ── Json ───────────────────────────────────────
  {
    name: "AddJSONElement",
    signature: "Result = AddJSONElement(JSONValue [, Index])",
    documentation:
      "Add a new array element to a JSON value of type #PB_JSON_Array.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "AddJSONMember",
    signature: "Result = AddJSONMember(JSONValue, Key$)",
    documentation:
      "Add a new member to a JSON value of type #PB_JSON_Object. If a member with the specified key already exists, it will be replaced.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "CatchJSON",
    signature: "Result = CatchJSON(#JSON, *Buffer, Size [, Flags])",
    documentation:
      "Parse JSON data from a memory buffer. The contents of the memory buffer are expected to be encoded in UTF-8 format. The JSONValue() function can be used to access the contained JSON value(s) after parsing.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "ClearJSONElements",
    signature: "ClearJSONElements(JSONValue)",
    documentation:
      "Remove all array elements from a JSON value of type #PB_JSON_Array.",
    category: "Json",
    returnType: "",
  },
  {
    name: "ClearJSONMembers",
    signature: "ClearJSONMembers(JSONValue)",
    documentation:
      "Remove all object members from a JSON value of type #PB_JSON_Object.",
    category: "Json",
    returnType: "",
  },
  {
    name: "ComposeJSON",
    signature: "Result\\$ = ComposeJSON(#JSON [, Flags])",
    documentation:
      "Compose the given JSON data into a string. A string can be parsed back into JSON data using the ParseJSON() function.",
    category: "Json",
    returnType: "",
  },
  {
    name: "CreateJSON",
    signature: "Result = CreateJSON(#JSON [, Flags])",
    documentation:
      "Create new, empty JSON data. Initially, the data will contain a JSON value of type #PB_JSON_Null. The JSONValue() function can be used to access this value to change it.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "ExamineJSONMembers",
    signature: "Result = ExamineJSONMembers(JSONValue)",
    documentation:
      "Starts to examine the members of a JSON value of type #PB_JSON_Object. The individual members can be examined with the NextJSONMember() , JSONMemberKey() and JSONMemberValue() functions.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "ExportJSON",
    signature: "Result = ExportJSON(#JSON, *Buffer, Size [, Flags])",
    documentation:
      "Export the given JSON data to a memory location. The JSON data will be encoded in UTF-8 format.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "ExportJSONSize",
    signature: "Result = ExportJSONSize(#JSON [, Flags])",
    documentation:
      "Returns the size in bytes needed to successfully export the given JSON data to a memory buffer with the specified flags.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "ExtractJSONArray",
    signature: "ExtractJSONArray(JSONValue, Array())",
    documentation:
      "Extract elements from the given JSON value of type #PB_JSON_Array into the specified Array(). The array will be resized to the number of elements contained in the JSON value.",
    category: "Json",
    returnType: "",
  },
  {
    name: "ExtractJSONList",
    signature: "ExtractJSONList(JSONValue, List())",
    documentation:
      "Extract elements from the given JSON value of type #PB_JSON_Array into the specified List(). The list will be resized to the number of elements contained in the JSON value.",
    category: "Json",
    returnType: "",
  },
  {
    name: "ExtractJSONMap",
    signature: "ExtractJSONMap(JSONValue, Map())",
    documentation:
      "Extract members from the given JSON value of type #PB_JSON_Object into the specified Map(). The map will be resized to the number of elements contained in the JSON value.",
    category: "Json",
    returnType: "",
  },
  {
    name: "ExtractJSONStructure",
    signature: "ExtractJSONStructure(JSONValue, *Buffer, Structure [, Flags])",
    documentation:
      "Extract members from the given JSON value of type #PB_JSON_Object into the specified structure memory. The structure will be cleared of any previous content before extracting the JSON values, unless #PB_JSON_NoClear flag is set.",
    category: "Json",
    returnType: "",
  },
  {
    name: "FreeJSON",
    signature: "FreeJSON(#JSON)",
    documentation: "Frees the JSON data and its contained values.",
    category: "Json",
    returnType: "",
  },
  {
    name: "GetJSONBoolean",
    signature: "Result = GetJSONBoolean(JSONValue)",
    documentation:
      "Return the boolean value of a JSON value of type #PB_JSON_Boolean. A JSON value can be set to a boolean with SetJSONBoolean() .",
    category: "Json",
    returnType: "i",
  },
  {
    name: "GetJSONDouble",
    signature: "Result.d = GetJSONDouble(JSONValue)",
    documentation:
      "Return the value of a JSON value of type #PB_JSON_Number as a double precision floating point value. A JSON value can be set to a number with SetJSONDouble() , SetJSONFloat() , SetJSONInteger() or SetJSONQuad() .",
    category: "Json",
    returnType: "i",
  },
  {
    name: "GetJSONElement",
    signature: "Result = GetJSONElement(JSONValue, Index)",
    documentation:
      "Return the JSON array element at the given ’Index’ of a JSON value of type #PB_JSON_Array.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "GetJSONFloat",
    signature: "Result.f = GetJSONFloat(JSONValue)",
    documentation:
      "Return the value of a JSON value of type #PB_JSON_Number as a single precision floating point value. A JSON value can be set to a number with SetJSONDouble() , SetJSONFloat() , SetJSONInteger() or SetJSONQuad() .",
    category: "Json",
    returnType: "i",
  },
  {
    name: "GetJSONInteger",
    signature: "Result = GetJSONInteger(JSONValue)",
    documentation:
      "Return the value of a JSON value of type #PB_JSON_Number as an integer value. A JSON value can be set to a number with SetJSONDouble() , SetJSONFloat() , SetJSONInteger() or SetJSONQuad() .",
    category: "Json",
    returnType: "i",
  },
  {
    name: "GetJSONMember",
    signature: "Result = GetJSONMember(JSONValue, Key$)",
    documentation:
      "Return the JSON object member with the given Key$ of a JSON value of type #PB_JSON_Object.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "GetJSONString",
    signature: "Result\\$ = GetJSONString(JSONValue)",
    documentation:
      "Return the value of a JSON value of type #PB_JSON_String as a string.",
    category: "Json",
    returnType: "",
  },
  {
    name: "GetJSONQuad",
    signature: "Result.q = GetJSONQuad(JSONValue)",
    documentation:
      "Return the value of a JSON value of type #PB_JSON_Number as an quad value. A JSON value can be set to a number with SetJSONDouble() , SetJSONFloat() , SetJSONInteger() or SetJSONQuad() .",
    category: "Json",
    returnType: "i",
  },
  {
    name: "InsertJSONArray",
    signature: "InsertJSONArray(JSONValue, Array())",
    documentation:
      "Insert the specified Array() into the given JSON value. The JSON value will be changed to type #PB_JSON_Array.",
    category: "Json",
    returnType: "",
  },
  {
    name: "InsertJSONList",
    signature: "InsertJSONList(JSONValue, List())",
    documentation:
      "Insert the specified List() into the given JSON value. The JSON value will be changed to type #PB_JSON_Array.",
    category: "Json",
    returnType: "",
  },
  {
    name: "InsertJSONMap",
    signature: "InsertJSONMap(JSONValue, Map())",
    documentation:
      "Insert the specified Map() into the given JSON value. The JSON value will be changed to type #PB_JSON_Object.",
    category: "Json",
    returnType: "",
  },
  {
    name: "InsertJSONStructure",
    signature: "InsertJSONStructure(JSONValue, *Buffer, Structure)",
    documentation:
      "Insert the contents of the specified structure memory into the given JSON value. The JSON value will be changed to type #PB_JSON_Object and contain one member for each member in the structure.",
    category: "Json",
    returnType: "",
  },
  {
    name: "IsJSON",
    signature: "Result = IsJSON(#JSON)",
    documentation:
      "Tests if the given #JSON number represents valid and correctly initialized JSON data.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "JSONArraySize",
    signature: "Result = JSONArraySize(JSONValue)",
    documentation:
      "Returns the number of elements in a JSON value of type #PB_JSON_Array.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "JSONErrorLine",
    signature: "Result = JSONErrorLine()",
    documentation:
      "Returns the line number within the JSON input of the last failed JSON parsing operation with ParseJSON() , CatchJSON() or LoadJSON() .",
    category: "Json",
    returnType: "i",
  },
  {
    name: "JSONErrorMessage",
    signature: "Result\\$ = JSONErrorMessage()",
    documentation:
      "Returns a message describing the cause for the failure at the last JSON parsing operation with ParseJSON() , CatchJSON() or LoadJSON() .",
    category: "Json",
    returnType: "",
  },
  {
    name: "JSONErrorPosition",
    signature: "Result = JSONErrorPosition()",
    documentation:
      "Returns the character position within the line of the last failed JSON parsing operation with ParseJSON() , CatchJSON() or LoadJSON() .",
    category: "Json",
    returnType: "i",
  },
  {
    name: "JSONMemberKey",
    signature: "Result\\$ = JSONMemberKey(JSONValue)",
    documentation:
      "After a call to NextJSONMember() , returns the key of the currently examined JSON object member of the specified JSON value of type #PB_JSON_Object.",
    category: "Json",
    returnType: "",
  },
  {
    name: "JSONMemberValue",
    signature: "Result = JSONMemberValue(JSONValue)",
    documentation:
      "After a call to NextJSONMember() , returns the address of the currently examined JSON object member of the specified JSON value of type #PB_JSON_Object.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "JSONObjectSize",
    signature: "Result = JSONObjectSize(JSONValue)",
    documentation:
      "Returns the number of members in a JSON value of type #PB_JSON_Object.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "JSONType",
    signature: "Result = JSONType(JSONValue)",
    documentation: "Returns the type of the given JSON value.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "JSONValue",
    signature: "Result = JSONValue(#JSON)",
    documentation:
      "Returns the value of the specified #JSON data. The type of the value can be checked with JSONType() .",
    category: "Json",
    returnType: "i",
  },
  {
    name: "LoadJSON",
    signature: "Result = LoadJSON(#JSON, FileName$ [, Flags])",
    documentation:
      "Parse JSON data from a file. The contents of the file are expected to be encoded in UTF-8 format. Files with another character encoding cannot be read by this command. The JSONValue() function can be used to access the contained JSON value(s) after parsing.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "NextJSONMember",
    signature: "Result = NextJSONMember(JSONValue)",
    documentation:
      "After a call to ExamineJSONMembers() , this function is used to iterate over all members of the specified JSON value of type #PB_JSON_Object. JSONMemberKey() and JSONMemberValue() can be used to get information about the current",
    category: "Json",
    returnType: "i",
  },
  {
    name: "ParseJSON",
    signature: "Result = ParseJSON(#JSON, Input$ [, Flags])",
    documentation:
      "Parse JSON data from a string. The JSONValue() function can be used to access the contained JSON value(s) after parsing.",
    category: "Json",
    returnType: "i",
  },
  {
    name: "RemoveJSONElement",
    signature: "RemoveJSONElement(JSONValue, Index)",
    documentation:
      "Remove the element at the specified index from a JSON value of type #PB_JSON_Array.",
    category: "Json",
    returnType: "",
  },
  {
    name: "RemoveJSONMember",
    signature: "RemoveJSONMember(JSONValue, Key$)",
    documentation:
      "Remove the memver with the specified key from a JSON value of type #PB_JSON_Object.",
    category: "Json",
    returnType: "",
  },
  {
    name: "ResizeJSONElements",
    signature: "ResizeJSONElements(JSONValue, Size)",
    documentation:
      "Resize a JSON value of type #PB_JSON_Array so that it has the given number of elements.",
    category: "Json",
    returnType: "",
  },
  {
    name: "SaveJSON",
    signature: "Result = SaveJSON(#JSON, FileName$ [, Flags])",
    documentation:
      "Save the given JSON data to a file. The file will be encoded in UTF-8 (without a leading byte-order mark).",
    category: "Json",
    returnType: "i",
  },
  {
    name: "SetJSONArray",
    signature: "Result = SetJSONArray(JSONValue)",
    documentation:
      "Change the type of the JSON value to #PB_JSON_Array. The array will have no elements (even if the value previously contained array elements).",
    category: "Json",
    returnType: "i",
  },
  {
    name: "SetJSONBoolean",
    signature: "SetJSONBoolean(JSONValue, Value)",
    documentation:
      "Change the type of the JSON value to #PB_JSON_Boolean and store the given boolean value.",
    category: "Json",
    returnType: "",
  },
  {
    name: "SetJSONDouble",
    signature: "SetJSONDouble(JSONValue, Value.d)",
    documentation:
      "Change the type of the JSON value to #PB_JSON_Number and store the given double value.",
    category: "Json",
    returnType: "",
  },
  {
    name: "SetJSONFloat",
    signature: "SetJSONFloat(JSONValue, Value.f)",
    documentation:
      "Change the type of the JSON value to #PB_JSON_Number and store the given float value.",
    category: "Json",
    returnType: "",
  },
  {
    name: "SetJSONInteger",
    signature: "SetJSONInteger(JSONValue, Value)",
    documentation:
      "Change the type of the JSON value to #PB_JSON_Number and store the given integer value.",
    category: "Json",
    returnType: "",
  },
  {
    name: "SetJSONNull",
    signature: "SetJSONNull(JSONValue)",
    documentation: "Clear the JSON value and set the type to #PB_JSON_Null.",
    category: "Json",
    returnType: "",
  },
  {
    name: "SetJSONObject",
    signature: "Result = SetJSONObject(JSONValue)",
    documentation:
      "Change the type of the JSON value to #PB_JSON_Object. The object will have no members (even if the value previously contained object members).",
    category: "Json",
    returnType: "i",
  },
  {
    name: "SetJSONQuad",
    signature: "SetJSONQuad(JSONValue, Value.q)",
    documentation:
      "Change the type of the JSON value to #PB_JSON_Number and store the given quad value.",
    category: "Json",
    returnType: "",
  },
  {
    name: "SetJSONString",
    signature: "SetJSONString(JSONValue, String$)",
    documentation:
      "Change the type of the JSON value to #PB_JSON_String and store the given string.",
    category: "Json",
    returnType: "",
  },
  // ── Keyboard ───────────────────────────────────────
  {
    name: "InitKeyboard",
    signature: "Result = InitKeyboard()",
    documentation:
      "Initializes the keyboard environment for later use. This function has to be called before any other function in this library.",
    category: "Keyboard",
    returnType: "i",
  },
  {
    name: "ExamineKeyboard",
    signature: "ExamineKeyboard()",
    documentation:
      "Updates the keyboard state. This function has to be called before using KeyboardInkey() , KeyboardPushed() or KeyboardReleased() .",
    category: "Keyboard",
    returnType: "",
  },
  {
    name: "KeyboardInkey",
    signature: "String\\$ = KeyboardInkey()",
    documentation:
      "Returns the last typed character, very useful when keyboard input is required within a gaming application, such as the name in highscore, in game console, etc.).",
    category: "Keyboard",
    returnType: "",
  },
  {
    name: "KeyboardMode",
    signature: "KeyboardMode(Flags)",
    documentation:
      "Changes the current behavior of the keyboard. This function affects KeyboardPushed() and KeyboardReleased() .",
    category: "Keyboard",
    returnType: "",
  },
  {
    name: "KeyboardPushed",
    signature: "Result = KeyboardPushed(KeyID)",
    documentation:
      "Checks if the specified key is pressed. Any number of keys may be pressed at the same time. The function ExamineKeyboard() must be called before this function in order to update the keyboard state. The keyboard behavior can be changed with KeyboardMode() .",
    category: "Keyboard",
    returnType: "i",
  },
  {
    name: "KeyboardReleased",
    signature: "Result = KeyboardReleased(KeyID)",
    documentation:
      "Checks if the specified key has been pushed and released. This function is useful for switch key checks, like a ’Pause’ key in a game (one time the game is paused, next time it will continue). The function ExamineKeyboard() must be called before this function to update the keyboard state.",
    category: "Keyboard",
    returnType: "i",
  },
  // ── Library ───────────────────────────────────────
  {
    name: "CloseLibrary",
    signature: "CloseLibrary(#Library)",
    documentation:
      "Closes a library previously opened using OpenLibrary() , and frees any memory associated with this library.",
    category: "Library",
    returnType: "",
  },
  {
    name: "CallCFunction",
    signature: "Result = CallCFunction(#Library, FunctionName$ [,Parameter1 [,",
    documentation:
      "Calls a function, in the specified library, in such a manner that the parameters are handled in the same fashion as a normal ’C’ language function.",
    category: "Library",
    returnType: "i",
  },
  {
    name: "CallCFunctionFast",
    signature: "Result = CallCFunctionFast(*FunctionPointer [,Parameter1 [,",
    documentation:
      "Calls a function directly, using its address. The function is expected to use the cdecl calling convention (the convention used by the C language).",
    category: "Library",
    returnType: "i",
  },
  {
    name: "CallFunction",
    signature: "Result = CallFunction(#Library, FunctionName$ [,Parameter1 [,",
    documentation:
      "Calls a function in the specified library, by using its name. The specified library must have previously been opened with the OpenLibrary() function. The function is expected to use the stdcall calling convention (the standard in most DLLs on Windows).",
    category: "Library",
    returnType: "i",
  },
  {
    name: "CallFunctionFast",
    signature: "Result = CallFunctionFast(*FunctionPointer [,Parameter1 [,",
    documentation:
      "Calls a function directly, using its address. The function is expected to use the stdcall calling convention (the standard in most DLLs on Windows).",
    category: "Library",
    returnType: "i",
  },
  {
    name: "CountLibraryFunctions",
    signature: "Result = CountLibraryFunctions(#Library)",
    documentation:
      "Counts the number of functions available in a library. The library must be open when this function is called.",
    category: "Library",
    returnType: "i",
  },
  {
    name: "ExamineLibraryFunctions",
    signature: "Result = ExamineLibraryFunctions(#Library)",
    documentation:
      "Initiates the process of examining the functions contained within a library.",
    category: "Library",
    returnType: "i",
  },
  {
    name: "GetFunction",
    signature: "Result = GetFunction(#Library, FunctionName$)",
    documentation:
      "Checks if the library, previously opened using the OpenLibrary() function, contains the given function and returns the function pointer.",
    category: "Library",
    returnType: "i",
  },
  {
    name: "GetFunctionEntry",
    signature: "Result = GetFunctionEntry(#Library, FunctionEntry)",
    documentation:
      "Checks if the library, contains the given function entry. This searches for a library function by its position within the libraries function table, rather than by its name.",
    category: "Library",
    returnType: "i",
  },
  {
    name: "IsLibrary",
    signature: "Result = IsLibrary(#Library)",
    documentation:
      "Tests if the given library number is valid and if the library has been correctly initialized.",
    category: "Library",
    returnType: "i",
  },
  {
    name: "LibraryFunctionAddress",
    signature: "Result = LibraryFunctionAddress()",
    documentation:
      "Returns the address of the function in the library currently being examined with the ExamineLibraryFunctions() and NextLibraryFunction() functions.",
    category: "Library",
    returnType: "i",
  },
  {
    name: "LibraryFunctionName",
    signature: "Result\\$ = LibraryFunctionName()",
    documentation:
      "Returns the name of the function in the library currently being examined with the ExamineLibraryFunctions() and NextLibraryFunction() functions.",
    category: "Library",
    returnType: "",
  },
  {
    name: "LibraryID",
    signature: "Result = LibraryID(#Library)",
    documentation:
      "Returns the unique ID which identifies the specified library in the operating system.",
    category: "Library",
    returnType: "i",
  },
  {
    name: "NextLibraryFunction",
    signature: "Result = NextLibraryFunction()",
    documentation:
      "Moves to the next library function in an enumeration started with ExamineLibraryFunctions() .",
    category: "Library",
    returnType: "i",
  },
  {
    name: "OpenLibrary",
    signature: "Result = OpenLibrary(#Library, Filename$)",
    documentation:
      "Opens a shared library in order that the functions within it may be accessed.",
    category: "Library",
    returnType: "i",
  },
  // ── Light ───────────────────────────────────────
  {
    name: "CopyLight",
    signature: "Result = CopyLight(#Light, #NewLight)",
    documentation:
      "Creates a new light which is the exact copy of the specified light. All light attributes such as: color, specular color, position etc. are duplicated.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "CreateLight",
    signature: "Result = CreateLight(#Light, Color [, x, y, z [, Flags]])",
    documentation:
      "Creates a new #Light of the given color in the current world. If WorldShadows() is required, it must be called before creating lights.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "FreeLight",
    signature: "FreeLight(#Light)",
    documentation:
      "Frees the specified #Light. All its associated memory is released and at this point, the object no longer may be used.",
    category: "Light",
    returnType: "",
  },
  {
    name: "HideLight",
    signature: "HideLight(#Light, State)",
    documentation: "Hides or shows the specified #Light.",
    category: "Light",
    returnType: "",
  },
  {
    name: "IsLight",
    signature: "Result = IsLight(#Light)",
    documentation:
      "Tests if the given light is valid and correctly initialized.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "GetLightColor",
    signature: "Result = GetLightColor(#Light, Type)",
    documentation: "Gets the specified light color value.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "SetLightColor",
    signature: "SetLightColor(#Light, Type, Color)",
    documentation: "Changes the light color value.",
    category: "Light",
    returnType: "",
  },
  {
    name: "SpotLightRange",
    signature: "SpotLightRange(#Light, InnerAngle, OuterAngle [, FallOff])",
    documentation:
      "Changes the spot #Light behavior. The light has to be created with the #PB_Light_Spot flag.",
    category: "Light",
    returnType: "",
  },
  {
    name: "LightLookAt",
    signature: "LightLookAt(#Light, x, y, z)",
    documentation:
      "Changes the #Light orientation in the world, to point towards the specified x,y,z point.",
    category: "Light",
    returnType: "",
  },
  {
    name: "DisableLightShadows",
    signature: "DisableLightShadows(#Light, State)",
    documentation: "Disables or enables the light shadow casting.",
    category: "Light",
    returnType: "",
  },
  {
    name: "MoveLight",
    signature: "MoveLight(#Light, x, y, z [, Mode])",
    documentation: "Moves the specified light.",
    category: "Light",
    returnType: "",
  },
  {
    name: "LightDirection",
    signature: "LightDirection(#Light, x, y, z)",
    documentation:
      "Changes the direction of a light. The position of the light is not changed.",
    category: "Light",
    returnType: "",
  },
  {
    name: "LightDirectionX",
    signature: "Result = LightDirectionX(#Light [, Mode])",
    documentation: "Returns the ’x’ direction vector of the light.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "LightDirectionY",
    signature: "Result = LightDirectionY(#Light [, Mode])",
    documentation: "Returns the ’y’ direction vector of the light.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "LightDirectionZ",
    signature: "Result = LightDirectionZ(#Light [, Mode])",
    documentation: "Returns the ’z’ direction vector of the light.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "LightX",
    signature: "Result = LightX(#Light [, Mode])",
    documentation: "Returns the current position of the light in the world.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "LightY",
    signature: "Result = LightY(#Light [, Mode])",
    documentation: "Returns the current position of the light in the world.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "LightZ",
    signature: "Result = LightZ(#Light [, Mode])",
    documentation: "Returns the current position of the light in the world.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "LightAttenuation",
    signature: "LightAttenuation(#Light, Range, Attenuation)",
    documentation: "Changes the light attenuation.",
    category: "Light",
    returnType: "",
  },
  {
    name: "RotateLight",
    signature: "RotateLight(#Light, x, y, z [, Mode])",
    documentation:
      "Rotates the #Light according to the specified x,y,z angle values.",
    category: "Light",
    returnType: "",
  },
  {
    name: "LightRoll",
    signature: "Result = LightRoll(#Light [, Mode])",
    documentation: "Gets the roll of the #Light.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "LightPitch",
    signature: "Result = LightPitch(#Light [, Mode])",
    documentation: "Gets the pitch of the #Light.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "LightYaw",
    signature: "Result = LightYaw(#Light [, Mode])",
    documentation: "Gets the yaw of the #Light.",
    category: "Light",
    returnType: "i",
  },
  {
    name: "LightID",
    signature: "LightID = LightID(#Light)",
    documentation: "Returns the unique system identifier of the light.",
    category: "Light",
    returnType: "i",
  },
  // ── List ───────────────────────────────────────
  {
    name: "AddElement",
    signature: "*Result = AddElement(List())",
    documentation:
      "Adds a new empty element after the current element or as the first item in the list if there are no elements in it. This new element becomes the current element of the list.",
    category: "List",
    returnType: "",
  },
  {
    name: "ChangeCurrentElement",
    signature: "ChangeCurrentElement(List(), *NewElement)",
    documentation:
      "Changes the current element of the specified list to the given new element. This function is very useful if you want to ”remember” an element, and restore it after performing other processing.",
    category: "List",
    returnType: "",
  },
  {
    name: "ClearList",
    signature: "ClearList(List())",
    documentation:
      "Clears all the elements in this list and releases their memory. After this call the list is still usable, but the list is empty (i.e. there are no elements in it).",
    category: "List",
    returnType: "",
  },
  {
    name: "CompareList",
    signature: "Result = CompareList(List1(), List2() [, Flags])",
    documentation:
      "Compare each elements of the two lists for equality. Recursively compares also contents of structured lists with dynamic elements (such as embedded arrays, lists or maps). The two lists are considered the equal if they have the same type and size and if each pair of elements is equal.",
    category: "List",
    returnType: "i",
  },
  {
    name: "CopyList",
    signature: "Result = CopyList(SourceList(), DestinationList())",
    documentation:
      "Copy the contents of one list to another list. After a successful copy, the two lists are identical.",
    category: "List",
    returnType: "i",
  },
  {
    name: "FreeList",
    signature: "FreeList(List())",
    documentation:
      "Free the specified list and release all its associated memory. To access this list again later, NewList has to be called for it.",
    category: "List",
    returnType: "",
  },
  {
    name: "ListSize",
    signature: "Result = ListSize(List())",
    documentation:
      "Returns the number of elements in the list. It does not change the current element. This function is very fast (it doesn’t iterates all the list but uses a cached result) and can be safely used to determine if a list is empty or not.",
    category: "List",
    returnType: "i",
  },
  {
    name: "DeleteElement",
    signature: "*Result = DeleteElement(List() [, Flags])",
    documentation:
      "Remove the current element from the list. After this call, the new current element is the previous element (the one before the deleted element). If that element does not exist (in other words, you deleted the first element in the list) then there is no more current element, as it will be before the",
    category: "List",
    returnType: "",
  },
  {
    name: "FirstElement",
    signature: "*Result = FirstElement(List())",
    documentation:
      "Changes the current list element to the first list element.",
    category: "List",
    returnType: "",
  },
  {
    name: "InsertElement",
    signature: "*Result = InsertElement(List())",
    documentation:
      "Inserts a new empty element before the current element, or at the start of the list if the list is empty (i.e. has no elements in it). This new element becomes the current element of the list.",
    category: "List",
    returnType: "",
  },
  {
    name: "LastElement",
    signature: "*Result = LastElement(List())",
    documentation: "Change the current list element to the last list element.",
    category: "List",
    returnType: "",
  },
  {
    name: "ListIndex",
    signature: "Index = ListIndex(List())",
    documentation:
      "Find out the position of the current element in the list, considering that the first element is at the position 0. This function is very fast, and can be used a lot without performance issue (it doesn’t iterate the list but uses a cached value).",
    category: "List",
    returnType: "i",
  },
  {
    name: "NextElement",
    signature: "*Result = NextElement(List())",
    documentation:
      "Moves from the current element to the next element in the list, or onto the first element if you have previously called ResetList()",
    category: "List",
    returnType: "",
  },
  {
    name: "PreviousElement",
    signature: "*Result = PreviousElement(List())",
    documentation:
      "Moves from the current element to the previous element in the list.",
    category: "List",
    returnType: "",
  },
  {
    name: "ResetList",
    signature: "ResetList(List())",
    documentation:
      "Resets the current list element to be before the first element. This means no element is actually valid. However, this is very useful to allow you to process all the elements by using NextElement() .",
    category: "List",
    returnType: "",
  },
  {
    name: "SelectElement",
    signature: "*Result = SelectElement(List(), Position)",
    documentation:
      "Change the current list element to the element at the specified position. This is very useful if you want to jump to a specific position in the list without manually iterating through the list using a loop.",
    category: "List",
    returnType: "",
  },
  {
    name: "SwapElements",
    signature: "SwapElements(List(), *FirstElement, *SecondElement)",
    documentation:
      "Swaps the position of two elements in the specified list. This command is a fast way to reorganize a list, because it does not actually move the element data itself.",
    category: "List",
    returnType: "",
  },
  {
    name: "MoveElement",
    signature: "MoveElement(List(), Location [, *RelativeElement])",
    documentation:
      "Moves the current element of the specified list to a different position in the list. The moved element remains the current element of the list. This is a fast operation because the element data itself is not moved to change the location in the list.",
    category: "List",
    returnType: "",
  },
  {
    name: "PushListPosition",
    signature: "PushListPosition(List())",
    documentation:
      "Remembers the current element (if any) of the list so it can later be restored using PopListPosition() . The position is remembered on a stack (a lifo stack: last in, first out), so multiple calls to this function are possible.",
    category: "List",
    returnType: "",
  },
  {
    name: "PopListPosition",
    signature: "PopListPosition(List())",
    documentation:
      "Restores the current element of the list previously remembered using PushListPosition() .",
    category: "List",
    returnType: "",
  },
  {
    name: "MergeLists",
    signature: "MergeLists(SourceList(), DestinationList() [, Location])",
    documentation:
      "Moves all elements from the SourceList() to the DestinationList(). This is a fast operation because the element data itself is not moved to merge the two lists.",
    category: "List",
    returnType: "",
  },
  {
    name: "SplitList",
    signature: "SplitList(SourceList(), DestinationList() [, KeepCurrent])",
    documentation:
      "Moves the elements in SourceList() from the current element onwards to the DestinationList(). This is a fast operation because the element data itself is not moved to split the list.",
    category: "List",
    returnType: "",
  },
  // ── Mail ───────────────────────────────────────
  {
    name: "AddMailAttachment",
    signature: "Result = AddMailAttachment(#Mail, Description$, Filename$ [,",
    documentation: "Add a file attachment to the mail.",
    category: "Mail",
    returnType: "i",
  },
  {
    name: "AddMailAttachmentData",
    signature: "Result = AddMailAttachmentData(#Mail, Description$, *Buffer,",
    documentation: "Add memory data as an attachment to the mail.",
    category: "Mail",
    returnType: "i",
  },
  {
    name: "AddMailRecipient",
    signature: "AddMailRecipient(#Mail, Address$, Flags)",
    documentation: "Add a recipient to the specified mail.",
    category: "Mail",
    returnType: "",
  },
  {
    name: "CreateMail",
    signature: "Result = CreateMail(#Mail, From$, Subject$ [, Encoding])",
    documentation: "Create a new, empty mail.",
    category: "Mail",
    returnType: "i",
  },
  {
    name: "FreeMail",
    signature: "FreeMail(#Mail)",
    documentation: "Free the specified mail and release its associated memory.",
    category: "Mail",
    returnType: "",
  },
  {
    name: "GetMailAttribute",
    signature: "Result\\$ = GetMailAttribute(#Mail, Attribute)",
    documentation: "Return the specified mail attribute.",
    category: "Mail",
    returnType: "",
  },
  {
    name: "GetMailBody",
    signature: "Result\\$ = GetMailBody(#Mail)",
    documentation:
      "Return the specified mail body, previously set with SetMailBody() .",
    category: "Mail",
    returnType: "",
  },
  {
    name: "IsMail",
    signature: "Result = IsMail(#Mail)",
    documentation:
      "Tests if the given mail number is valid and if the mail has been correctly initialized.",
    category: "Mail",
    returnType: "i",
  },
  {
    name: "MailProgress",
    signature: "Result = MailProgress(#Mail)",
    documentation:
      "Return the progress of the specified mail transfer, started with SendMail() .",
    category: "Mail",
    returnType: "i",
  },
  {
    name: "RemoveMailRecipient",
    signature: "RemoveMailRecipient(#Mail [, Address$ [, Flags])",
    documentation: "Remove a recipient from the specified mail.",
    category: "Mail",
    returnType: "",
  },
  {
    name: "SendMail",
    signature: "Result = SendMail(#Mail, Smtp$ [, Port [, Flags [, User$,",
    documentation: "Send the specified mail.",
    category: "Mail",
    returnType: "i",
  },
  {
    name: "SetMailAttribute",
    signature: "SetMailAttribute(#Mail, Attribute, Value$)",
    documentation: "Change the specified mail attribute with the new value.",
    category: "Mail",
    returnType: "",
  },
  {
    name: "SetMailBody",
    signature: "SetMailBody(#Mail, Body$)",
    documentation:
      "Change the mail body. GetMailBody() can be used to read the body content.",
    category: "Mail",
    returnType: "",
  },
  // ── Map ───────────────────────────────────────
  {
    name: "AddMapElement",
    signature: "Result = AddMapElement(Map(), Key$ [, Flags])",
    documentation:
      "Adds a new empty element in the Map() using the specified key. This new element becomes the current element of the map.",
    category: "Map",
    returnType: "i",
  },
  {
    name: "ClearMap",
    signature: "ClearMap(Map())",
    documentation:
      "Clears all the elements in the specified map and releases their memory. After this call the map is still usable, but is empty (i.e. there are no more elements in it).",
    category: "Map",
    returnType: "",
  },
  {
    name: "CompareMap",
    signature: "Result = CompareMap(Map1(), Map2() [, Flags])",
    documentation:
      "Compare each elements of the two maps for equality. Recursively compares also contents of structured maps with dynamic elements (such as embedded arrays, lists or maps). The two maps are considered the equal if they have the same type and size and if each pair of elements is equal.",
    category: "Map",
    returnType: "i",
  },
  {
    name: "CopyMap",
    signature: "Result = CopyMap(SourceMap(), DestinationMap())",
    documentation: "Copy every element of the source to the destination map.",
    category: "Map",
    returnType: "i",
  },
  {
    name: "FreeMap",
    signature: "FreeMap(Map())",
    documentation:
      "Free the specified map and release all its associated memory. To access it again NewMap has to be called.",
    category: "Map",
    returnType: "",
  },
  {
    name: "MapSize",
    signature: "Result = MapSize(Map())",
    documentation:
      "Returns the number of elements in the specified map. It does not change the current element.",
    category: "Map",
    returnType: "i",
  },
  {
    name: "DeleteMapElement",
    signature: "Result = DeleteMapElement(Map() [, Key$])",
    documentation:
      "Removes the current element or the element with the given key from the specified map.",
    category: "Map",
    returnType: "i",
  },
  {
    name: "FindMapElement",
    signature: "Result = FindMapElement(Map(), Key$)",
    documentation:
      "Change the current map element to the element associated at the specified key.",
    category: "Map",
    returnType: "i",
  },
  {
    name: "MapKey",
    signature: "Key\\$ = MapKey(Map())",
    documentation: "Returns the key of the current map element.",
    category: "Map",
    returnType: "",
  },
  {
    name: "NextMapElement",
    signature: "Result = NextMapElement(Map())",
    documentation:
      "Moves from the current element to the next element in the specified map, or onto the first element if ResetMap() was previously called.",
    category: "Map",
    returnType: "i",
  },
  {
    name: "ResetMap",
    signature: "ResetMap(Map())",
    documentation:
      "Resets the current element of the specified map to be before the first element. This means no more current element. However, this is very useful to process all the elements by using NextMapElement() .",
    category: "Map",
    returnType: "",
  },
  {
    name: "PushMapPosition",
    signature: "PushMapPosition(Map())",
    documentation:
      "Remembers the current element (if any) of the map so it can later be restored using PopMapPosition() . The position is remembered on a stack structure, so multiple calls to this function are possible.",
    category: "Map",
    returnType: "",
  },
  {
    name: "PopMapPosition",
    signature: "PopMapPosition(Map())",
    documentation:
      "Restores the current element of the map previously remembered using PushMapPosition() .",
    category: "Map",
    returnType: "",
  },
  // ── Material ───────────────────────────────────────
  {
    name: "AddMaterialLayer",
    signature: "AddMaterialLayer(#Material, TextureID [, Mode [,",
    documentation:
      "Adds a new layer to the material and put the specified texture in it.",
    category: "Material",
    returnType: "",
  },
  {
    name: "CopyMaterial",
    signature: "Result = CopyMaterial(#Material, #NewMaterial)",
    documentation:
      "Creates a new material which is the exact copy of the specified material.",
    category: "Material",
    returnType: "i",
  },
  {
    name: "CountMaterialLayers",
    signature: "Result = CountMaterialLayers(#Material)",
    documentation: "Returns the number of layers the material contains.",
    category: "Material",
    returnType: "i",
  },
  {
    name: "CreateMaterial",
    signature: "Result = CreateMaterial(#Material, TextureID [, Color])",
    documentation: "Creates a new material using the specified texture.",
    category: "Material",
    returnType: "i",
  },
  {
    name: "CreateAnimatedMaterial",
    signature: "Result = CreateAnimatedMaterial(#Material, TextureArray(),",
    documentation:
      "Creates a new animated material using the specified textures.",
    category: "Material",
    returnType: "i",
  },
  {
    name: "CreateShader",
    signature:
      "Result = CreateShader(ShaderID, VertexProgram$, FragmentProgram$)",
    documentation:
      "Creates a new shader using the specified vertex and fragment programs.",
    category: "Material",
    returnType: "i",
  },
  {
    name: "CreateShaderMaterial",
    signature: "Result = CreateShaderMaterial(#Material, ShaderID)",
    documentation: "Creates a new shader based material.",
    category: "Material",
    returnType: "i",
  },
  {
    name: "MaterialShaderAutoParameter",
    signature:
      "MaterialShaderAutoParameter(#Material, ProgramType, ParameterName$,",
    documentation:
      "SetaparametervaluefortheshaderbasedmaterialpreviouscreatedwithCreateShaderMaterial().",
    category: "Material",
    returnType: "",
  },
  {
    name: "MaterialShaderParameter",
    signature:
      "MaterialShaderParameter(#Material, ProgramType, ParameterName$,",
    documentation: "Set specific parameters to the shader.",
    category: "Material",
    returnType: "",
  },
  {
    name: "MaterialShaderTexture",
    signature: "MaterialShaderTexture(#Material, TextureID1, TextureID2,",
    documentation:
      "Sets the textures to use for the shader based material previous created with CreateShaderMaterial() .",
    category: "Material",
    returnType: "",
  },
  {
    name: "DisableMaterialLighting",
    signature: "DisableMaterialLighting(#Material, State)",
    documentation:
      "Enables or disables the dynamic #Material lighting. The object which will use this material will be not affected by a dynamic light, created with the CreateLight() function. Dynamic lighting is enabled by default when a material is created.",
    category: "Material",
    returnType: "",
  },
  {
    name: "FreeMaterial",
    signature: "FreeMaterial(#Material)",
    documentation:
      "Frees the specified #Material. All its associated memory is released and this object can’t be used anymore.",
    category: "Material",
    returnType: "",
  },
  {
    name: "IsMaterial",
    signature: "Result = IsMaterial(#Material)",
    documentation:
      "Tests if the given material is valid and correctly initialized.",
    category: "Material",
    returnType: "i",
  },
  {
    name: "GetMaterialAttribute",
    signature: "Result = GetMaterialAttribute(#Material, Attribute)",
    documentation: "Get the specified material attribute.",
    category: "Material",
    returnType: "i",
  },
  {
    name: "GetMaterialColor",
    signature: "Result = GetMaterialColor(#Material, Type)",
    documentation: "Get the specified material color.",
    category: "Material",
    returnType: "i",
  },
  {
    name: "SetMaterialColor",
    signature: "SetMaterialColor(#Material, Type, Color)",
    documentation: "Set the specified material color.",
    category: "Material",
    returnType: "",
  },
  {
    name: "MaterialBlendingMode",
    signature: "MaterialBlendingMode(#Material, Mode)",
    documentation:
      "Changes the way the material will be blended with the scene (screen background).",
    category: "Material",
    returnType: "",
  },
  {
    name: "MaterialFilteringMode",
    signature: "MaterialFilteringMode(#Material, Mode [, MaxAnisotropicValue])",
    documentation: "Changes the material filtering mode.",
    category: "Material",
    returnType: "",
  },
  {
    name: "MaterialID",
    signature: "MaterialID = MaterialID(#Material)",
    documentation: "Returns the unique system identifier of the material.",
    category: "Material",
    returnType: "i",
  },
  {
    name: "MaterialShadingMode",
    signature: "MaterialShadingMode(#Material, Mode)",
    documentation: "Changes the #Material shading mode.",
    category: "Material",
    returnType: "",
  },
  {
    name: "MaterialCullingMode",
    signature: "MaterialCullingMode(#Material, Mode)",
    documentation: "Set the culling mode for the material.",
    category: "Material",
    returnType: "",
  },
  {
    name: "MaterialShininess",
    signature: "MaterialShininess(#Material, Shininess [, SpecularColor])",
    documentation:
      "Changes the shininess of the #Material (the size of the specular highlights).",
    category: "Material",
    returnType: "",
  },
  {
    name: "MaterialTextureAliases",
    signature: "MaterialTextureAliases(#Material, TextureID1, TextureID2,",
    documentation:
      "Set textures for use in a material script. It allows to use the same material script with dynamic textures. In the material script, the texture reference needs to be changed from ’texture mytexture.jpg’ to ’texture_alias texture1’ (or ’texture_alias texture2’, ’texture_alias texture3’,",
    category: "Material",
    returnType: "",
  },
  {
    name: "GetScriptMaterial",
    signature: "Result = GetScriptMaterial(#Material, Name$)",
    documentation:
      "Get a material defined in an OGRE script file. Scripts are loaded and parsed when calling Parse3DScripts() .",
    category: "Material",
    returnType: "i",
  },
  {
    name: "MaterialFog",
    signature:
      "MaterialFog(#Material, Color, Intensity, StartDistance, EndDistance)",
    documentation: "Adds a fog effect on the specified material.",
    category: "Material",
    returnType: "",
  },
  {
    name: "ReloadMaterial",
    signature: "ReloadMaterial(MaterialName$, ScriptFilename$, ParseScript)",
    documentation:
      "Reloads a material from an OGRE script based on its name. This is useful when using customized materials stored in script files.",
    category: "Material",
    returnType: "",
  },
  {
    name: "ResetMaterial",
    signature: "ResetMaterial(ObjectType)",
    documentation: "Resets all materials for the specified object types.",
    category: "Material",
    returnType: "",
  },
  {
    name: "SetMaterialAttribute",
    signature: "SetMaterialAttribute(#Material, Attribute, Value [, Layer])",
    documentation: "Sets the specified attribute value to the given material.",
    category: "Material",
    returnType: "",
  },
  {
    name: "ScrollMaterial",
    signature: "ScrollMaterial(#Material, x, y, Mode [, Layer])",
    documentation: "Scrolls the material layer according to x,y values.",
    category: "Material",
    returnType: "",
  },
  {
    name: "RemoveMaterialLayer",
    signature: "RemoveMaterialLayer(#Material)",
    documentation: "Removes the top most (last added) material layer.",
    category: "Material",
    returnType: "",
  },
  {
    name: "ScaleMaterial",
    signature: "ScaleMaterial(#Material, x, y [, Layer])",
    documentation:
      "Scales the material. The parameters ’x’ and ’y’ are scale factors.",
    category: "Material",
    returnType: "",
  },
  {
    name: "RotateMaterial",
    signature: "RotateMaterial(#Material, Angle, Mode [, Layer])",
    documentation: "Rotates the material layer according to the angle value.",
    category: "Material",
    returnType: "",
  },
  {
    name: "MaterialAnimation",
    signature: "MaterialAnimation(#Material, Texture$, NbFrames, Time.f)",
    documentation:
      "Add an animated texture to the material. An animated texture is composed of any number of textures, all the same size, with the frame number appended before the extension in their filename. For example, if ”test.jpg” is specified as ’Texture$’ and ’NbFrames’ is set to 3, the textures",
    category: "Material",
    returnType: "",
  },
  // ── Math ───────────────────────────────────────
  {
    name: "Abs",
    signature: "Result.f(.d) = Abs(Number.f(.d))",
    documentation: "Returns the absolute value of the given float value.",
    category: "Math",
    returnType: "",
  },
  {
    name: "ACos",
    signature: "Result.f(.d) = ACos(Value.f(.d))",
    documentation: "Returns the arc-cosine of the specified value.",
    category: "Math",
    returnType: "",
  },
  {
    name: "ACosH",
    signature: "Result.f(.d) = ACosH(Value.f(.d))",
    documentation: "Returns the area hyperbolic cosine of the specified value.",
    category: "Math",
    returnType: "",
  },
  {
    name: "ASin",
    signature: "Result.f(.d) = ASin(Value.f(.d))",
    documentation: "Returns the arc-sine of the specified value.",
    category: "Math",
    returnType: "",
  },
  {
    name: "ASinH",
    signature: "Result.f(.d) = ASinH(Value.f(.d))",
    documentation: "Returns the area hyperbolic sine of the specified value.",
    category: "Math",
    returnType: "",
  },
  {
    name: "ATan",
    signature: "Result.f(.d) = ATan(Value.f(.d))",
    documentation: "Returns the arc-tangent of the specified value.",
    category: "Math",
    returnType: "",
  },
  {
    name: "ATan2",
    signature: "Result.f(.d) = ATan2(x.f(.d), y.f(.d))",
    documentation:
      "Calculates the angle in radian between the x axis and a line drawn in the direction specified by ’x’ and ’y’. It can be used to calculate angles between lines in 2D or to transform rectangular coordinates into polar coordinates.",
    category: "Math",
    returnType: "",
  },
  {
    name: "ATanH",
    signature: "Result.f(.d) = ATanH(Value.f(.d))",
    documentation:
      "Returns the area hyperbolic tangent of the specified value.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Cos",
    signature: "Result.f(.d) = Cos(Angle.f(.d))",
    documentation: "Returns the cosine of the specified angle.",
    category: "Math",
    returnType: "",
  },
  {
    name: "CosH",
    signature: "Result.f(.d) = CosH(Angle.f(.d))",
    documentation:
      "Returns the hyperbolic cosine of the specified hyperbolic angle.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Degree",
    signature: "Result.f(.d) = Degree(Angle.f(.d))",
    documentation: "Converts the given angle from radian to degree.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Exp",
    signature: "Result.f(.d) = Exp(Number.f(.d))",
    documentation:
      "Returns the result of the exponential function. This is the value e raised to the power ’Number’.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Infinity",
    signature: "Result.f(.d) = Infinity()",
    documentation:
      "Returns the special floating-point value representing positive infinity. Negative infinity can be calculated using ”-Infinity()”.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Int",
    signature: "Result = Int(Number.f(.d))",
    documentation: "Returns the integer part of a float number.",
    category: "Math",
    returnType: "i",
  },
  {
    name: "IntQ",
    signature: "Result = IntQ(Number.f(.d))",
    documentation: "Returns the integer part of a float number as a quad.",
    category: "Math",
    returnType: "i",
  },
  {
    name: "IsInfinity",
    signature: "Result.f(.d) = IsInfinity(Value.f(.d))",
    documentation:
      "Returns nonzero if the given value represents positive or negative infinity.",
    category: "Math",
    returnType: "",
  },
  {
    name: "IsNaN",
    signature: "Result.f(.d) = IsNaN(Value.f(.d))",
    documentation:
      "Returns nonzero if the given value ’Not a Number’. This value is the result of some invalid calculations. It can also be generated using the NaN() function.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Pow",
    signature: "Result.f(.d) = Pow(Number.f(.d), Power.f(.d))",
    documentation: "Returns the given number, raised to the given power.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Log",
    signature: "Result.f(.d) = Log(Number.f(.d))",
    documentation:
      "Returns the natural Log (ie log to the base e) of the given number.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Log10",
    signature: "Result.f(.d) = Log10(Number.f(.d))",
    documentation: "Returns the log in base 10 of the given number.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Mod",
    signature: "Result.f(.d) = Mod(Number.f(.d), Divisor.f(.d))",
    documentation:
      "Returns the remainder of the division of Number.f(.d) by Divisor.f(.d).",
    category: "Math",
    returnType: "",
  },
  {
    name: "NaN",
    signature: "Result.f(.d) = NaN()",
    documentation:
      "Returns the special floating-point value representing ’Not a Number’. This value is returned from invalid calculations such as calculating the square root of a negative number.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Radian",
    signature: "Result.f(.d) = Radian(Angle.f(.d))",
    documentation: "Converts the given angle from degrees into radian.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Random",
    signature: "Result = Random(Maximum [, Minimum])",
    documentation:
      "Returns a random number from zero to the given maximum value (both values included).",
    category: "Math",
    returnType: "i",
  },
  {
    name: "RandomData",
    signature: "RandomData(*Buffer, Length)",
    documentation: "Fills the specified memory buffer with random data.",
    category: "Math",
    returnType: "",
  },
  {
    name: "RandomSeed",
    signature: "RandomSeed(Value)",
    documentation:
      "Changes the random number seed for the values returned with Random() and RandomData() .",
    category: "Math",
    returnType: "",
  },
  {
    name: "Round",
    signature: "Result.f(.d) = Round(Number.f(.d), Mode)",
    documentation:
      "Round the specified float number according to the given mode.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Sign",
    signature: "Result = Sign(Number.f(.d))",
    documentation:
      "Returns an integer value representing the sign of the given number.",
    category: "Math",
    returnType: "i",
  },
  {
    name: "Sin",
    signature: "Result.f(.d) = Sin(Angle.f(.d))",
    documentation: "Returns the sine of the specified angle.",
    category: "Math",
    returnType: "",
  },
  {
    name: "SinH",
    signature: "Result.f(.d) = SinH(Angle.f(.d))",
    documentation:
      "Returns the hyperbolic sine of the specified hyperbolic angle.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Sqr",
    signature: "Result.f(.d) = Sqr(Number.f(.d))",
    documentation: "Returns the square root of the specified number.",
    category: "Math",
    returnType: "",
  },
  {
    name: "Tan",
    signature: "Result.f(.d) = Tan(Angle.f(.d))",
    documentation: "Returns the tangent of the specified angle.",
    category: "Math",
    returnType: "",
  },
  {
    name: "TanH",
    signature: "Result.f(.d) = TanH(Angle.f(.d))",
    documentation:
      "Returns the hyperbolic tangent of the specified hyperbolic angle.",
    category: "Math",
    returnType: "",
  },
  // ── Memory ───────────────────────────────────────
  {
    name: "AllocateMemory",
    signature: "*MemoryID = AllocateMemory(Size [, Flags])",
    documentation:
      "Allocates a contiguous memory area with the specified size in bytes. The new memory area will be cleared and filled with zeros.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "AllocateStructure",
    signature: "*Item.StructureName = AllocateStructure(StructureName)",
    documentation:
      "Allocates a new dynamic structure item. This dynamic structure item is properly initialized and ready to use, without the need to call InitializeStructure() . To access the structure data, a pointer associated with the specified ’StructureName’ has to be used.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "CompareMemory",
    signature: "Result = CompareMemory(*MemoryID1, *MemoryID2, Size)",
    documentation: "Compares the content of two memory areas.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "CompareMemoryString",
    signature:
      "Result = CompareMemoryString(*String1, *String2 [, Mode [, Length",
    documentation: "Compare two strings at the specified memory addresses.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "CopyMemory",
    signature: "CopyMemory(*SourceMemoryID, *DestinationMemoryID, Size)",
    documentation:
      "Copy a memory area starting from the *SourceMemoryID to the *DestinationMemoryID.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "CopyMemoryString",
    signature: "Result = CopyMemoryString(*String [, @*DestinationMemoryID])",
    documentation:
      "Copy the string from the specified address to the destination memory address if specified, or at the end of the previous buffer if omitted.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "FillMemory",
    signature: "FillMemory(*Memory, Size [, Value [, Type]])",
    documentation:
      "Fills the memory area with the specified value by repeatedly writing that value.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "FreeMemory",
    signature: "FreeMemory(*MemoryID)",
    documentation:
      "Free the memory previously allocated with AllocateMemory() , ReAllocateMemory() , Ascii() or UTF8() .",
    category: "Memory",
    returnType: "",
  },
  {
    name: "FreeStructure",
    signature: "FreeStructure(*Item)",
    documentation:
      "Free the dynamic structure item previously allocated with AllocateStructure() . There is no need to call ClearStructure() before freeing the structure.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "MemorySize",
    signature: "Result = MemorySize(*MemoryID)",
    documentation: "Returns the length of the given memory area.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "MemoryStringLength",
    signature: "Result = MemoryStringLength(*String [, Flags])",
    documentation:
      "Returns the length (in characters) of the given zero terminated string.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "MoveMemory",
    signature: "MoveMemory(*SourceMemoryID, *DestinationMemoryID, Size)",
    documentation:
      "Copy a memory area starting from the *SourceMemoryID to the *DestinationMemoryID. Overlapping of the two memory areas is allowed.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "ReAllocateMemory",
    signature: "*NewMemoryID = ReAllocateMemory(*MemoryID, Size [, Flags])",
    documentation:
      "Resizes the given memory buffer to a new size. The memory may be copied to a new location in the process if there is not enough memory available at its current location.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PeekA",
    signature: "Value.a = PeekA(*MemoryBuffer)",
    documentation:
      "Reads an ascii character (1 byte) from the specified memory address.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PeekB",
    signature: "Value.b = PeekB(*MemoryBuffer)",
    documentation:
      "Reads a byte (1 byte) number from the specified memory address.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PeekC",
    signature: "Value.c = PeekC(*MemoryBuffer)",
    documentation:
      "Reads a character (2 bytes in unicode ) number from the specified memory address.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PeekD",
    signature: "Value.d = PeekD(*MemoryBuffer)",
    documentation:
      "Reads a double (8 bytes) number from the specified memory address.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PeekI",
    signature: "Value.i = PeekI(*MemoryBuffer)",
    documentation:
      "Reads an integer (4 bytes in 32-bit executable, 8 bytes in 64-bit executable) number from the specified memory address.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PeekL",
    signature: "Value.l = PeekL(*MemoryBuffer)",
    documentation:
      "Reads a long (4 bytes) number from the specified memory address.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PeekW",
    signature: "Value.w = PeekW(*MemoryBuffer)",
    documentation:
      "Reads a word (2 bytes) number from the specified memory address.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PeekF",
    signature: "Value.f = PeekF(*MemoryBuffer)",
    documentation: "Reads a float (4 bytes) from the specified memory address.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PeekQ",
    signature: "Value.q = PeekQ(*MemoryBuffer)",
    documentation:
      "Reads a quad (8 bytes) number from the specified memory address.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PeekS",
    signature: "Text\\$ = PeekS(*MemoryBuffer [, Length [, Format]])",
    documentation: "Reads a string from the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PeekU",
    signature: "Value.u = PeekU(*MemoryBuffer)",
    documentation:
      "Reads an unicode character (2 bytes) from the specified memory address.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PokeA",
    signature: "PokeA(*MemoryBuffer, Number)",
    documentation:
      "Writes an ascii character (1 byte) to the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PokeB",
    signature: "PokeB(*MemoryBuffer, Number)",
    documentation:
      "Writes a byte (1 byte) number to the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PokeC",
    signature: "PokeC(*MemoryBuffer, Number)",
    documentation:
      "Writes a character (2 bytes in unicode ) number to the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PokeD",
    signature: "PokeD(*MemoryBuffer, Number)",
    documentation:
      "Writes a double (8 bytes) number to the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PokeI",
    signature: "PokeI(*MemoryBuffer, Number)",
    documentation:
      "Writes an integer (4 bytes in 32-bit executable, 8 bytes in 64-bit executable) number to the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PokeL",
    signature: "PokeL(*MemoryBuffer, Number)",
    documentation:
      "Writes a long (4 bytes) number to the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PokeQ",
    signature: "PokeQ(*MemoryBuffer, Number)",
    documentation:
      "Writes a quad (8 bytes) number to the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PokeW",
    signature: "PokeW(*MemoryBuffer, Number)",
    documentation:
      "Writes a word (2 bytes) number to the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PokeF",
    signature: "PokeF(*MemoryBuffer, Number.f)",
    documentation: "Writes a float (4 bytes) to the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  {
    name: "PokeS",
    signature: "Result = PokeS(*MemoryBuffer, Text$ [, Length [, Flags]])",
    documentation:
      "Writes a string to the specified memory address, followed by a null-character for termination.",
    category: "Memory",
    returnType: "i",
  },
  {
    name: "PokeU",
    signature: "PokeU(*MemoryBuffer, Number)",
    documentation:
      "Writes an unicode character (2 bytes) to the specified memory address.",
    category: "Memory",
    returnType: "",
  },
  // ── Menu ───────────────────────────────────────
  {
    name: "CloseSubMenu",
    signature: "CloseSubMenu()",
    documentation:
      "Close the current sub menu and return to the enclosing menu after a previous call to OpenSubMenu() .",
    category: "Menu",
    returnType: "",
  },
  {
    name: "CreateMenu",
    signature: "Result = CreateMenu(#Menu, WindowID)",
    documentation: "Creates a new empty menu on the given window.",
    category: "Menu",
    returnType: "i",
  },
  {
    name: "CreateImageMenu",
    signature: "Result = CreateImageMenu(#Menu, WindowID [, Flags])",
    documentation:
      "Creates a new empty menu on the given window with support for images in the menu items.",
    category: "Menu",
    returnType: "i",
  },
  {
    name: "CreatePopupMenu",
    signature: "Result = CreatePopupMenu(#Menu)",
    documentation: "Creates a new empty popup menu.",
    category: "Menu",
    returnType: "i",
  },
  {
    name: "CreatePopupImageMenu",
    signature: "Result = CreatePopupImageMenu(#Menu [, Flags])",
    documentation:
      "Creates a new empty popup menu with image support for its items.",
    category: "Menu",
    returnType: "i",
  },
  {
    name: "DisplayPopupMenu",
    signature: "DisplayPopupMenu(#Menu, WindowID [, x, y])",
    documentation:
      "Displays a PopupMenu under the current mouse position or at the given screen location.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "DisableMenuItem",
    signature: "DisableMenuItem(#Menu, MenuItem, State)",
    documentation: "Disable (or enable) a menu item in the given menu.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "FreeMenu",
    signature: "FreeMenu(#Menu)",
    documentation: "Frees the specified menu and all its resources.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "GetMenuItemState",
    signature: "Result = GetMenuItemState(#Menu, MenuItem)",
    documentation: "Returns the checkbox state of a menu item.",
    category: "Menu",
    returnType: "i",
  },
  {
    name: "GetMenuItemText",
    signature: "Text\\$ = GetMenuItemText(#Menu, Item)",
    documentation: "Returns the text from the specified menu item.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "GetMenuTitleText",
    signature: "Text\\$ = GetMenuTitleText(#Menu, Title)",
    documentation: "Returns the title text of the specified menu title item.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "HideMenu",
    signature: "HideMenu(#Menu, State)",
    documentation: "Hide or show the specified menu.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "IsMenu",
    signature: "Result = IsMenu(#Menu)",
    documentation:
      "Tests if the given menu is valid and correctly initialized.",
    category: "Menu",
    returnType: "i",
  },
  {
    name: "MenuBar",
    signature: "MenuBar()",
    documentation: "Creates a separator bar in the current menu.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "MenuHeight",
    signature: "Result = MenuHeight()",
    documentation:
      "Returns the height of the menu title bar. This allows the correct height of a window to be calculated when using a menu.",
    category: "Menu",
    returnType: "i",
  },
  {
    name: "MenuItem",
    signature: "MenuItem(MenuItemID, Text$ [, ImageID])",
    documentation: "Creates a new item on the current menu.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "MenuID",
    signature: "MenuID = MenuID(#Menu)",
    documentation: "Returns the unique system identifier of the given menu.",
    category: "Menu",
    returnType: "i",
  },
  {
    name: "MenuTitle",
    signature: "MenuTitle(Title$)",
    documentation: "Creates a new title item on the menu.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "OpenSubMenu",
    signature: "OpenSubMenu(Text$ [, ImageID])",
    documentation: "Creates an empty submenu in the current menu.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "SetMenuItemState",
    signature: "SetMenuItemState(#Menu, MenuItem, State)",
    documentation:
      "Changes the specified MenuItem state. This functions allows you to display a ’check mark’ next to the menu item text.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "SetMenuItemText",
    signature: "SetMenuItemText(#Menu, Item, Text$)",
    documentation: "Changes the text of the specified menu item.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "SetMenuTitleText",
    signature: "SetMenuTitleText(#Menu, Title, Text$)",
    documentation: "Changes the specified menu title item text.",
    category: "Menu",
    returnType: "",
  },
  {
    name: "BindMenuEvent",
    signature: "BindMenuEvent(#Menu, MenuItem, @Callback())",
    documentation:
      "Bind a menu event to a callback. It’s an additional way to handle events in PureBasic, which works without problem with the regulars WindowEvent() / WaitWindowEvent() commands. A menu event can be unbound with UnbindMenuEvent() .",
    category: "Menu",
    returnType: "",
  },
  {
    name: "UnbindMenuEvent",
    signature: "UnbindMenuEvent(#Menu, MenuItem, @Callback())",
    documentation:
      "Unbind a menu event from a callback. If no matching event callback is found, this command has no effect.",
    category: "Menu",
    returnType: "",
  },
  // ── Mesh ───────────────────────────────────────
  {
    name: "CreateMesh",
    signature: "Result = CreateMesh(#Mesh [, Type [, Mode])",
    documentation:
      "Creates a new empty #Mesh. After creation, the further commands of this library like MeshVertexPosition() or MeshFace() can be used to build it.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CreateDataMesh",
    signature: "Result = CreateDataMesh(#Mesh, Array.MeshVertex() [, Mode])",
    documentation:
      "Creates a new #Mesh from the specified 2 dimensional array of MeshVertex type. This command allows faster mesh creation than using CreateMesh() by preparing an array and submitting in one batch to the command.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CopyMesh",
    signature: "Result = CopyMesh(#Mesh, #NewMesh)",
    documentation:
      "Creates a #NewMesh which is the exact copy of the specified #Mesh. If #PB_Any is used as the ’#NewMesh’ parameter, then the new mesh number will be returned as ’Result’. Dynamic meshes are not supported for copy (meshes created with the #PB_Mesh_Dynamic flag).",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "FreeMesh",
    signature: "FreeMesh(#Mesh)",
    documentation:
      "Free the specified #Mesh. All its associated memory is released and the object may not be used anymore.",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "IsMesh",
    signature: "Result = IsMesh(#Mesh)",
    documentation:
      "Tests if the given #Mesh is valid and the mesh has been correctly initialized. This function is bulletproof and may be used with any value. If Result equals zero then the given mesh has not been properly created or initialized. This is the correct way to ensure a mesh is",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "LoadMesh",
    signature: "Result = LoadMesh(#Mesh, Filename$)",
    documentation:
      "Loads a new mesh. Before loading a mesh, an archive must be specified with Add3DArchive() .",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "MeshID",
    signature: "Result = MeshID(#Mesh)",
    documentation:
      "Returns the unique MeshID of the #Mesh. The use of this function is required especially by the CreateEntity() function.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "GetMeshData",
    signature: "Result = GetMeshData(#Mesh, SubMesh, DataArray(), Flags,",
    documentation:
      "Get internal mesh data, like vertices, face etc. Dynamic meshes are not supported (meshes created with the #PB_Mesh_Dynamic flag).",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "SetMeshData",
    signature: "Result = SetMeshData(#Mesh, SubMesh, DataArray(), Flags,",
    documentation:
      "Set internal mesh data, like vertices, face etc. Dynamic meshes are not supported (meshes created with the #PB_Mesh_Dynamic flag).",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "BuildMeshShadowVolume",
    signature: "BuildMeshShadowVolume(#Mesh)",
    documentation:
      "Create the shadow volume for the specified #Mesh. It is required if the mesh needs to cast a shadow. It should be done once the mesh creation is completely done, or the shadow will not match the mesh.",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "CreateLine3D",
    signature:
      "Result = CreateLine3D(#Mesh, x, y, z, Color, x2, y2, z2, Color2)",
    documentation:
      "Create a new 3D line mesh. The line is a wireframe object which can be used to ease debugging. To change the line position, just create it again.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CreateCube",
    signature: "Result = CreateCube(#Mesh, Size)",
    documentation: "Create a new cube mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CreateSphere",
    signature: "Result = CreateSphere(#Mesh, Radius.f [, NbSegments, NbRings])",
    documentation: "Create a new sphere mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CreateTube",
    signature:
      "Result = CreateTube(#Mesh, OuterRadius.f, InnerRadius.f, Height.f",
    documentation: "Create a new tube mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CreateTorus",
    signature:
      "Result = CreateTorus(#Mesh, Radius.f, SectionRadius.f, Height.f [,",
    documentation: "Create a new torus mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CreateCapsule",
    signature: "Result = CreateCapsule(#Mesh, Radius.f, Height.f [, NbRings,",
    documentation: "Create a new capsule mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CreateIcoSphere",
    signature: "Result = CreateIcoSphere(#Mesh, Radius.f [, Iterations)",
    documentation: "Create a new ico-sphere mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CreateCone",
    signature:
      "Result = CreateCone(#Mesh, Radius.f, Height.f [, NbBaseSegments,",
    documentation: "Create a new cone.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CreateCylinder",
    signature: "Result = CreateCylinder(#Mesh, Radius.f, Height.f [,",
    documentation: "Create a new cylinder mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "CreatePlane",
    signature: "Result = CreatePlane(#Mesh, TileSizeX, TileSizeZ, TileCountX,",
    documentation: "Create a new plane mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "MeshDirectAdd",
    signature: "MeshDirectAdd(#Mesh, MeshVertexArray(), MeshFaceArray(), Type,",
    documentation:
      "Add a new submesh to the specified #Mesh. A mesh can have any number of submeshes. A submesh position is relative to the mesh position.",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "AddSubMesh",
    signature: "AddSubMesh([Type])",
    documentation:
      "Add a new submesh to the current mesh previously created with CreateMesh() . A mesh can have any number of submeshes. A submesh position is relative to the mesh position. Once a submesh is created, use the following commands to build it: MeshVertexPosition() , MeshFace() and",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "MeshIndexCount",
    signature: "Result = MeshIndexCount(#Mesh [, SubMesh])",
    documentation: "Return the number of indexes in the mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "MeshVertexCount",
    signature: "Result = MeshVertexCount(#Mesh [, SubMesh])",
    documentation: "Return the number of vertices of the mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "UpdateMeshBoundingBox",
    signature: "UpdateMeshBoundingBox(#Mesh)",
    documentation:
      "Update the bounding box of the mesh. If a mesh has been manually modified, its bounding box has to be recalculated, especially if the mesh is used for collisions. The bounding box is the smallest box which can contain the whole mesh.",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "UpdateMesh",
    signature: "UpdateMesh(#Mesh, SubMesh)",
    documentation:
      "Start the mesh update, to modify in real time its vertices and other values. The mesh has to be created with the #PB_Mesh_Dynamic flag. Once the mesh modifications are finished, FinishMesh() needs to be called. The mesh can use the following commands to change their",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "MeshIndex",
    signature: "MeshIndex(Index)",
    documentation:
      "Add or update a single vertex in the mesh being created with CreateMesh() or updated with UpdateMesh() . It behaves like the command MeshFace() , but with an arbitrary number of vertices. When using the mode #PB_Mesh_LineList or #PB_Mesh_LineStrip, there are only",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "MeshRadius",
    signature: "Result = MeshRadius(#Mesh)",
    documentation:
      "Returns the radius of the smallest sphere which can contain the mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "MeshVertex",
    signature:
      "MeshVertex(x, y, z, u.f, v.f, Color [, NormalX, NormalY, NormalZ])",
    documentation:
      "Add a vertex to the current mesh previously created with CreateMesh() . Specific attributes to the newly created vertex can be added with MeshVertexTangent() . To create a new face use MeshFace() .",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "MeshVertexPosition",
    signature: "MeshVertexPosition(x, y, z)",
    documentation:
      "Add a new vertex to the current mesh previously created with CreateMesh() . To set specific attributes to the newly created vertex, use the following commands: MeshVertexNormal() , MeshVertexTangent() , MeshVertexColor() and MeshVertexTextureCoordinate() . If several",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "MeshVertexNormal",
    signature: "MeshVertexNormal(x, y, z)",
    documentation:
      "Set normal information to the current vertex previously added with MeshVertexPosition() or MeshVertex() . The normal vector is used to calculate lightning on an object. To automatically computes the vector normal once the mesh is created, use NormalizeMesh() .",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "MeshVertexTangent",
    signature: "MeshVertexTangent(x, y, z)",
    documentation:
      "Set tangent information to the current vertex previously added with MeshVertexPosition() or MeshVertex() . The tangent vector is mainly used in shader scripts. To automatically compute the tangent vector once the mesh is created, use BuildMeshTangents() .",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "MeshVertexColor",
    signature: "MeshVertexColor(Color)",
    documentation:
      "Set color information to the current vertex previously added with MeshVertexPosition() or MeshVertex() . To have any effect, the material associated to the mesh has to be defined with SetMaterialColor(#Material, #PB_Material_AmbientColor, -1) and AmbientColor() () set to a",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "MeshVertexTextureCoordinate",
    signature: "MeshVertexTextureCoordinate(u.f [, v.f [, w.f]])",
    documentation:
      "Set UVW information to the current vertex previously added with MeshVertexPosition() or MeshVertex() . The UVW information is used to apply the texture on the mesh.",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "MeshFace",
    signature: "MeshFace(Vertex1, Vertex2, Vertex3 [, Vertex4])",
    documentation:
      "Add or update a face to the current mesh previously created with CreateMesh() . The specified vertices must exist. The first vertex index starts from 0. The created face is a triangle or a quad. MeshIndex() can be used if the number of vertices is more than four.",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "FinishMesh",
    signature: "FinishMesh(StaticMesh)",
    documentation:
      "Finish the creation of the current mesh started with CreateMesh() .",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "NormalizeMesh",
    signature: "NormalizeMesh(#Mesh [, SubMesh])",
    documentation:
      "Normalize the mesh or the submesh. It will automatically compute the normal vector for all vertices of the specified mesh or submesh. Dynamic meshes are not supported (meshes created with the #PB_Mesh_Dynamic flag).",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "BuildMeshTangents",
    signature: "BuildMeshTangents(#Mesh)",
    documentation:
      "Automatically computes the tangent vectors for all vertices of the specified mesh. Dynamic meshes are not supported (meshes created with the #PB_Mesh_Dynamic flag).",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "AddMeshManualLOD",
    signature: "AddMeshManualLOD(#Mesh, #MeshLOD, Distance.f)",
    documentation:
      "Add a new level of detail (LOD) to the mesh. The #Mesh will be replaced automatically with #MeshLOD (which is often a simplified version of #Mesh, with less details) when displayed above the specified distance from the camera. Several LOD mesh can be used for the same #Mesh",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "BuildMeshLOD",
    signature: "BuildMeshLOD(#Mesh [, NbLOD, Distance.f, ReductionValue.f])",
    documentation:
      "Build automatically one or several level of detail (LOD) for the mesh. The #Mesh will be replaced automatically with less complex mesh when displayed above the specified distance from the camera. If more precise LOD meshes are required, AddMeshManualLOD() can be used.",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "SaveMesh",
    signature: "SaveMesh(#Mesh, Filename$)",
    documentation:
      "Save the mesh. The saved mesh can be loaded back with the LoadMesh() command.",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "SetMeshMaterial",
    signature: "SetMeshMaterial(#Mesh, MaterialID [, SubMesh])",
    documentation: "Set the mesh default material.",
    category: "Mesh",
    returnType: "",
  },
  {
    name: "SubMeshCount",
    signature: "Result = SubMeshCount(#Mesh)",
    documentation: "Returns the number of submeshes of the mesh.",
    category: "Mesh",
    returnType: "i",
  },
  {
    name: "TransformMesh",
    signature: "TransformMesh(#Mesh, x, y, z, ScaleX, ScaleY, ScaleZ, RotateX,",
    documentation:
      "Transform the Mesh according to the given parameters. Dynamic meshes are not supported for transform (meshes created with the #PB_Mesh_Dynamic flag).",
    category: "Mesh",
    returnType: "",
  },
  // ── Mouse ───────────────────────────────────────
  {
    name: "InitMouse",
    signature: "Result = InitMouse()",
    documentation:
      "Initializes the mouse environment for later use. You should call this function before any other functions in this library. If the result is zero, no mouse is available.",
    category: "Mouse",
    returnType: "i",
  },
  {
    name: "ExamineMouse",
    signature: "Result = ExamineMouse()",
    documentation:
      "Updates the mouse state. This function should be used before MouseDeltaX() , MouseDeltaY() , MouseX() , MouseY() or MouseButton() .",
    category: "Mouse",
    returnType: "i",
  },
  {
    name: "MouseButton",
    signature: "Result = MouseButton(Button)",
    documentation:
      "Returns zero if the specified button number is not pressed, otherwise the button is pressed. Any number of buttons can be pressed at the same time. ExamineMouse() must be called before this function to update the actual button’s state.",
    category: "Mouse",
    returnType: "i",
  },
  {
    name: "MouseDeltaX",
    signature: "Result = MouseDeltaX()",
    documentation:
      "Returns the mouse ’x’ movement (in pixels) since the last call of this function.",
    category: "Mouse",
    returnType: "i",
  },
  {
    name: "MouseDeltaY",
    signature: "Result = MouseDeltaY()",
    documentation:
      "Returns the mouse ’y’ movement (in pixels) since the last call of this function.",
    category: "Mouse",
    returnType: "i",
  },
  {
    name: "MouseLocate",
    signature: "MouseLocate(x, y)",
    documentation:
      "Changes the absolute position (in pixels) of the mouse in the current screen. This is useful when using MouseX() or MouseY() .",
    category: "Mouse",
    returnType: "",
  },
  {
    name: "MouseWheel",
    signature: "Result = MouseWheel()",
    documentation:
      "Returns the number of ticks the mouse wheel has moved since the last function call. ExamineMouse() should be called before this function to update the mouse status.",
    category: "Mouse",
    returnType: "i",
  },
  {
    name: "MouseX",
    signature: "Result = MouseX()",
    documentation:
      "Returns the actual mouse ’x’ position (in pixels) on the current screen. The position can be changed easily with the MouseLocate() function. ExamineMouse() should be called before this function to update the actual mouse position.",
    category: "Mouse",
    returnType: "i",
  },
  {
    name: "MouseY",
    signature: "Result = MouseY()",
    documentation:
      "Returns the actual mouse ’y’ position (in pixels) on the current screen. The position can be changed easily with the MouseLocate() function. ExamineMouse() should be called before this function to update the actual mouse position.",
    category: "Mouse",
    returnType: "i",
  },
  {
    name: "ReleaseMouse",
    signature: "ReleaseMouse(State)",
    documentation:
      "Locks or releases the mouse to allow its use under standard OS. This is typically called after checking the result of IsScreenActive() function.",
    category: "Mouse",
    returnType: "",
  },
  // ── Movie ───────────────────────────────────────
  {
    name: "FreeMovie",
    signature: "FreeMovie(#Movie)",
    documentation: "Frees the specified movie and all its resources.",
    category: "Movie",
    returnType: "",
  },
  {
    name: "InitMovie",
    signature: "Result = InitMovie()",
    documentation:
      "Initialize the movie environment for later use. You must call this function before any other functions in this library.",
    category: "Movie",
    returnType: "i",
  },
  {
    name: "IsMovie",
    signature: "Result = IsMovie(#Movie)",
    documentation:
      "Tests if the given #Movie number is a valid and correctly initialized movie.",
    category: "Movie",
    returnType: "i",
  },
  {
    name: "LoadMovie",
    signature: "Result = LoadMovie(#Movie, Filename$)",
    documentation:
      "Loads the specified movie file and prepares it for playback.",
    category: "Movie",
    returnType: "i",
  },
  {
    name: "MovieAudio",
    signature: "MovieAudio(#Movie, Volume, Balance)",
    documentation:
      "Control the audio stream of a movie. Volume and balance can be modified during playback. Changes occur immediately.",
    category: "Movie",
    returnType: "",
  },
  {
    name: "MovieHeight",
    signature: "Height = MovieHeight(#Movie)",
    documentation: "Returns the height of the movie.",
    category: "Movie",
    returnType: "i",
  },
  {
    name: "MovieInfo",
    signature: "Result = MovieInfo(#Movie, Flags)",
    documentation: "Returns additional information about the movie.",
    category: "Movie",
    returnType: "i",
  },
  {
    name: "MovieLength",
    signature: "Length = MovieLength(#Movie)",
    documentation: "Returns the length of the movie.",
    category: "Movie",
    returnType: "i",
  },
  {
    name: "MovieSeek",
    signature: "MovieSeek(#Movie, Frame.q)",
    documentation: "Change the movie’s playback position to the given frame.",
    category: "Movie",
    returnType: "",
  },
  {
    name: "MovieStatus",
    signature: "Result.q = MovieStatus(#Movie)",
    documentation: "Get the playback status of the movie.",
    category: "Movie",
    returnType: "i",
  },
  {
    name: "MovieWidth",
    signature: "Width = MovieWidth(#Movie)",
    documentation: "Returns the width of the movie.",
    category: "Movie",
    returnType: "i",
  },
  {
    name: "PauseMovie",
    signature: "PauseMovie(#Movie)",
    documentation:
      "Pauses the movie playback. Playback can be resumed using the ResumeMovie() function.",
    category: "Movie",
    returnType: "",
  },
  {
    name: "PlayMovie",
    signature: "Result = PlayMovie(#Movie, WindowID)",
    documentation:
      "Start to play a movie previously loaded with LoadMovie() on the specified window.",
    category: "Movie",
    returnType: "i",
  },
  {
    name: "ResizeMovie",
    signature: "ResizeMovie(#Movie, x, y, Width, Height)",
    documentation:
      "Resize and move the movie display area on the movie window.",
    category: "Movie",
    returnType: "",
  },
  {
    name: "ResumeMovie",
    signature: "ResumeMovie(#Movie)",
    documentation: "Continue to play the movie, after a PauseMovie() call.",
    category: "Movie",
    returnType: "",
  },
  {
    name: "StopMovie",
    signature: "StopMovie(#Movie)",
    documentation:
      "Stop playing the movie. If the movie is played again, it will restart from the beginning.",
    category: "Movie",
    returnType: "",
  },
  // ── Music ───────────────────────────────────────
  {
    name: "CatchMusic",
    signature: "Result = CatchMusic(#Music, *Buffer, Size)",
    documentation:
      "Loads the specified music from the specified memory buffer. PlayMusic() can be used to start playing the music. ModPlug supports a lot of music formats, which includes: Protracker (4 channels), FastTracker (up to 32 channels, 16-bit quality), Impulse Tracker, etc.",
    category: "Music",
    returnType: "i",
  },
  {
    name: "FreeMusic",
    signature: "FreeMusic(#Music)",
    documentation:
      "Stop and remove the specified music previously loaded with the LoadMusic() or CatchMusic() functions from memory. Once a music has been freed, it can’t be played anymore.",
    category: "Music",
    returnType: "",
  },
  {
    name: "GetMusicPosition",
    signature: "Position = GetMusicPosition(#Music)",
    documentation:
      "Returns the current pattern position of the playing music module.",
    category: "Music",
    returnType: "i",
  },
  {
    name: "GetMusicRow",
    signature: "Row = GetMusicRow(#Music)",
    documentation:
      "Returns the current row position in the pattern of the playing music module.",
    category: "Music",
    returnType: "i",
  },
  {
    name: "IsMusic",
    signature: "Result = IsMusic(#Music)",
    documentation:
      "Tests if the given music module is valid and correctly initialized.",
    category: "Music",
    returnType: "i",
  },
  {
    name: "LoadMusic",
    signature: "Result = LoadMusic(#Music, Filename$)",
    documentation:
      "Loads the specified music module. PlayMusic() can be used to start playing the music. ModPlug supports a lot of music formats, which includes: Protracker (4 channels), FastTracker (up to 32 channels, 16-bit quality), Impulse Tracker, etc.",
    category: "Music",
    returnType: "i",
  },
  {
    name: "MusicVolume",
    signature: "MusicVolume(#Music, Volume.f)",
    documentation:
      "Change the master volume of the specified music, in real-time.",
    category: "Music",
    returnType: "",
  },
  {
    name: "PlayMusic",
    signature: "PlayMusic(#Music)",
    documentation:
      "Starts to play the specified music previously loaded with the LoadMusic() or CatchMusic() functions.",
    category: "Music",
    returnType: "",
  },
  {
    name: "SetMusicPosition",
    signature: "SetMusicPosition(#Music, Position)",
    documentation:
      "Changes the current pattern position of the playing #Music to the new one.",
    category: "Music",
    returnType: "",
  },
  {
    name: "StopMusic",
    signature: "StopMusic(#Music)",
    documentation: "Stop the #Music (if it was playing).",
    category: "Music",
    returnType: "",
  },
  // ── Network ───────────────────────────────────────
  {
    name: "CloseNetworkConnection",
    signature: "CloseNetworkConnection(Connection)",
    documentation: "Close the specified connection.",
    category: "Network",
    returnType: "",
  },
  {
    name: "ConnectionID",
    signature: "Result = ConnectionID(Connection)",
    documentation: "Returns the unique system identifier of the connection.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "ServerID",
    signature: "Result = ServerID(#Server)",
    documentation: "Returns the unique system identifier of the server.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "CloseNetworkServer",
    signature: "CloseNetworkServer(#Server)",
    documentation:
      "Shutdown the specified running server. All clients connected to this server are automatically removed. The port is freed and can be reused.",
    category: "Network",
    returnType: "",
  },
  {
    name: "CreateNetworkServer",
    signature:
      "Result = CreateNetworkServer(#Server, Port [, Flags [, BoundIP$]])",
    documentation:
      "Create a new network server on the local computer using the specified port. To support TLS encryption, UseNetworkTLS() needs to be called before this command and a TLS flag needs to be specified.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "ExamineIPAddresses",
    signature: "Result = ExamineIPAddresses([Format])",
    documentation:
      "Start examining the available IP addresses on the local computer. NextIPAddress() is used to retrieve each IP.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "FreeIP",
    signature: "FreeIP(IPAddress)",
    documentation:
      "Free an IPv6 address. This function only works with IPv6 addresses returned by MakeIPAddress() , NextIPAddress() and GetClientIP() , and must not be used with IPv4 addresses.",
    category: "Network",
    returnType: "",
  },
  {
    name: "HostName",
    signature: "String\\$ = HostName()",
    documentation: "Returns the computer’s hostname.",
    category: "Network",
    returnType: "",
  },
  {
    name: "IPString",
    signature: "String\\$ = IPString(IPAddress [, Format])",
    documentation:
      "Returns the string representation in dotted form (ie: ”127.0.0.1” for IPv4 or ”::1” for IPv6) of the specified numerical IPAddress.",
    category: "Network",
    returnType: "",
  },
  {
    name: "IPAddressField",
    signature: "Result = IPAddressField(IPAddress, Field [, Format])",
    documentation: "Returns the given field value of the specified IP address.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "MakeIPAddress",
    signature:
      "Result = MakeIPAddress(Field0, Field1, Field2, Field3 [, Field4,",
    documentation:
      "Returns the equivalent numeric value of the specified IP address.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "EventServer",
    signature: "Server = EventServer()",
    documentation:
      "This function returns the number of the server which has received data, allowing multiple servers to be managed on one computer. It is only needed on the server side.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "EventClient",
    signature: "Connection = EventClient()",
    documentation:
      "This function returns the connection of the client that sent data and is only needed on the server side.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "GetClientIP",
    signature: "IP = GetClientIP(Client)",
    documentation:
      "This function returns the IP address of the client and should be called after EventClient(). If the connection is an IPv6 connection the returned address must be freed with FreeIP().",
    category: "Network",
    returnType: "i",
  },
  {
    name: "GetClientPort",
    signature: "Port = GetClientPort(Client)",
    documentation:
      "Returns the client port and should be called after EventClient() .",
    category: "Network",
    returnType: "i",
  },
  {
    name: "NetworkClientEvent",
    signature: "Result = NetworkClientEvent(Connection)",
    documentation:
      "Checks if an event happened on a network connection created with OpenNetworkConnection() .",
    category: "Network",
    returnType: "i",
  },
  {
    name: "NetworkServerEvent",
    signature: "Result = NetworkServerEvent([#Server])",
    documentation:
      "Checks if an event happened on one of the open network servers.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "NextIPAddress",
    signature: "Result = NextIPAddress()",
    documentation:
      "Returns the next IP address of the local machine. ExamineIPAddresses() must be called before this command.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "OpenNetworkConnection",
    signature:
      "Connection = OpenNetworkConnection(ServerName$, Port [, Flags [,",
    documentation:
      "Opens a network connection to the specified server. To support TLS encryption, UseNetworkTLS() needs to be called before this command and a TLS flag needs to be specified.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "ReceiveNetworkData",
    signature: "Result = ReceiveNetworkData(Connection, *DataBuffer,",
    documentation:
      "Receives raw data from the specified client. This function can be used by both client and server applications and should be called only after having received a #PB_NetworkEvent_Data event.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "SendNetworkData",
    signature: "Result = SendNetworkData(Connection, *MemoryBuffer, Length)",
    documentation:
      "Sends raw data to the specified client. This function can be used by both client and server applications.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "SendNetworkString",
    signature: "Result = SendNetworkString(Connection, String$ [, Format])",
    documentation:
      "Send a string to the specified client. This function can be used by both client and server applications.",
    category: "Network",
    returnType: "i",
  },
  {
    name: "UseNetworkTLS",
    signature: "UseNetworkTLS([PrivateKey$, Certificate$ [, CaCertificate$]])",
    documentation:
      "Enable and configure TLS support for network library. This command must be called before using CreateNetworkServer() or OpenNetworkConnection() with the TLS flags.",
    category: "Network",
    returnType: "",
  },
  // ── Node ───────────────────────────────────────
  {
    name: "AttachNodeObject",
    signature: "AttachNodeObject(#Node, ObjectID)",
    documentation: "Attaches an existing object to a node.",
    category: "Node",
    returnType: "",
  },
  {
    name: "DetachNodeObject",
    signature: "DetachNodeObject(#Node, ObjectID)",
    documentation: "Detaches a previously attached object from a node.",
    category: "Node",
    returnType: "",
  },
  {
    name: "CreateNode",
    signature: "Result = CreateNode(#Node [, x, y, z])",
    documentation: "Creates a new node at the specified position.",
    category: "Node",
    returnType: "i",
  },
  {
    name: "NodeID",
    signature: "NodeID = NodeID(#Node)",
    documentation: "Returns the unique system identifier of the node.",
    category: "Node",
    returnType: "i",
  },
  {
    name: "NodeLookAt",
    signature:
      "NodeLookAt(#Node, x, y, z [, DirectionX, DirectionY, DirectionZ])",
    documentation:
      "The point (in world unit) that a node is facing. The position of the node is not changed.",
    category: "Node",
    returnType: "",
  },
  {
    name: "NodeX",
    signature: "Result = NodeX(#Node [, Mode])",
    documentation: "Returns the ’x’ position of the node in the world.",
    category: "Node",
    returnType: "i",
  },
  {
    name: "NodeY",
    signature: "Result = NodeY(#Node [, Mode])",
    documentation: "Returns the ’y’ position of the node in the world.",
    category: "Node",
    returnType: "i",
  },
  {
    name: "NodeZ",
    signature: "Result = NodeZ(#Node [, Mode])",
    documentation: "Returns the ’z’ position of the node in the world.",
    category: "Node",
    returnType: "i",
  },
  {
    name: "FreeNode",
    signature: "FreeNode(#Node)",
    documentation:
      "Frees the specified node created with CreateNode() before. All its associated memory is released and this object can’t be used anymore. The attached objects are not freed automatically, and can be re-used.",
    category: "Node",
    returnType: "",
  },
  {
    name: "IsNode",
    signature: "Result = IsNode(#Node)",
    documentation:
      "Tests if the given node is valid and correctly initialized.",
    category: "Node",
    returnType: "i",
  },
  {
    name: "MoveNode",
    signature: "MoveNode(#Node, x, y, z [, Mode])",
    documentation: "Move the specified node.",
    category: "Node",
    returnType: "",
  },
  {
    name: "RotateNode",
    signature: "RotateNode(#Node, x, y, z [, Mode])",
    documentation:
      "Rotates the node according to the specified x,y,z angle values.",
    category: "Node",
    returnType: "",
  },
  {
    name: "ScaleNode",
    signature: "ScaleNode(#Node, x, y, z [, Mode])",
    documentation:
      "Scales the node according to the specified x,y,z values. When using #PB_Relative mode, this is a factor based scale which means the node size will be multiplied with the given value to obtain the new size.",
    category: "Node",
    returnType: "",
  },
  {
    name: "NodeFixedYawAxis",
    signature: "NodeFixedYawAxis(#Node, Enable [, VectorX, VectorY, VectorZ])",
    documentation:
      "Change the fixed yaw axis of the node. The default behaviour of a node is to yaw around its own Y axis.",
    category: "Node",
    returnType: "",
  },
  {
    name: "NodeRoll",
    signature: "Result = NodeRoll(#Node [, Mode])",
    documentation: "Get the roll of the node.",
    category: "Node",
    returnType: "i",
  },
  {
    name: "NodePitch",
    signature: "Result = NodePitch(#Node [, Mode])",
    documentation: "Get the pitch of the node.",
    category: "Node",
    returnType: "i",
  },
  {
    name: "NodeYaw",
    signature: "Result = NodeYaw(#Node [, Mode])",
    documentation: "Get the yaw of the node.",
    category: "Node",
    returnType: "i",
  },
  // ── NodeAnimation ───────────────────────────────────────
  {
    name: "CreateNodeAnimation",
    signature: "Result = CreateNodeAnimation(#NodeAnimation, NodeID, Length,",
    documentation:
      "Creates a new node animation of the specified length. A node animation doesn’t exist physically in the 3D world, it is an virtual track to move a node (and its attached object) easily around the world.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "FreeNodeAnimation",
    signature: "FreeNodeAnimation(#NodeAnimation)",
    documentation:
      "Frees a node animation and releases all its associated memory. This node animation must not be used (by using its number with the other functions in this library) after calling this function, unless you create it again.",
    category: "NodeAnimation",
    returnType: "",
  },
  {
    name: "CreateNodeAnimationKeyFrame",
    signature: "CreateNodeAnimationKeyFrame(#NodeAnimation, Time, x, y, z)",
    documentation:
      "Create a new keyframe for the #NodeAnimation. A keyframe is a point in the world at a specified time. When the node animation will be played, it will follow every keyframe and thus moving from points to points. The move will be interpolated to respect the time constraint. For example, if the",
    category: "NodeAnimation",
    returnType: "",
  },
  {
    name: "GetNodeAnimationKeyFrameTime",
    signature:
      "Result = GetNodeAnimationKeyFrameTime(#NodeAnimation, KeyFrame)",
    documentation: "Returns the #NodeAnimation keyframe time.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "SetNodeAnimationKeyFramePosition",
    signature:
      "SetNodeAnimationKeyFramePosition(#NodeAnimation, KeyFrame, x, y, z)",
    documentation: "Changes the keyframe position for the #NodeAnimation.",
    category: "NodeAnimation",
    returnType: "",
  },
  {
    name: "GetNodeAnimationKeyFrameX",
    signature: "Result = GetNodeAnimationKeyFrameX(#NodeAnimation, KeyFrame)",
    documentation: "Returns the #NodeAnimation keyframe ’x’ position.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "GetNodeAnimationKeyFrameY",
    signature: "Result = GetNodeAnimationKeyFrameY(#NodeAnimation, KeyFrame)",
    documentation: "Returns the #NodeAnimation keyframe ’y’ position.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "GetNodeAnimationKeyFrameZ",
    signature: "Result = GetNodeAnimationKeyFrameZ(#NodeAnimation, KeyFrame)",
    documentation: "Returns the #NodeAnimation keyframe ’z’ position.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "SetNodeAnimationKeyFrameRotation",
    signature:
      "SetNodeAnimationKeyFrameRotation(#NodeAnimation, KeyFrame, x, y, z",
    documentation: "Changes the keyframe rotation for the #NodeAnimation.",
    category: "NodeAnimation",
    returnType: "",
  },
  {
    name: "GetNodeAnimationKeyFramePitch",
    signature:
      "Result = GetNodeAnimationKeyFramePitch(#NodeAnimation, KeyFrame)",
    documentation: "Returns the #NodeAnimation keyframe pitch.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "GetNodeAnimationKeyFrameYaw",
    signature: "Result = GetNodeAnimationKeyFrameYaw(#NodeAnimation, KeyFrame)",
    documentation: "Returns the #NodeAnimation keyframe yaw.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "GetNodeAnimationKeyFrameRoll",
    signature:
      "Result = GetNodeAnimationKeyFrameRoll(#NodeAnimation, KeyFrame)",
    documentation: "Returns the #NodeAnimation keyframe roll.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "SetNodeAnimationKeyFrameScale",
    signature:
      "SetNodeAnimationKeyFrameScale(#NodeAnimation, KeyFrame, x, y, z)",
    documentation:
      "Changes the keyframe scale factor for the #NodeAnimation. The scale factor will be applied to the node associated to the animation.",
    category: "NodeAnimation",
    returnType: "",
  },
  {
    name: "AddNodeAnimationTime",
    signature: "AddNodeAnimationTime(#NodeAnimation, Time)",
    documentation: "Add time to the specified #NodeAnimation.",
    category: "NodeAnimation",
    returnType: "",
  },
  {
    name: "StartNodeAnimation",
    signature: "StartNodeAnimation(#NodeAnimation [, Flags])",
    documentation:
      "Start the specified #NodeAnimation. The animation is always started from the beginning.",
    category: "NodeAnimation",
    returnType: "",
  },
  {
    name: "StopNodeAnimation",
    signature: "StopNodeAnimation(#NodeAnimation)",
    documentation: "Stop the specified #NodeAnimation.",
    category: "NodeAnimation",
    returnType: "",
  },
  {
    name: "NodeAnimationStatus",
    signature: "Result = NodeAnimationStatus(#NodeAnimation)",
    documentation: "Return the specified #NodeAnimation status.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "GetNodeAnimationTime",
    signature: "Result = GetNodeAnimationTime(#NodeAnimation)",
    documentation: "Returns the current #NodeAnimation time.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "SetNodeAnimationTime",
    signature: "SetNodeAnimationTime(#NodeAnimation, Time)",
    documentation:
      "Changes the current #NodeAnimation time. This is an absolute time position. To change the time relative to the current time, use AddNodeAnimationTime() .",
    category: "NodeAnimation",
    returnType: "",
  },
  {
    name: "GetNodeAnimationLength",
    signature: "Result = GetNodeAnimationLength(#NodeAnimation)",
    documentation: "Returns the #NodeAnimation length.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "SetNodeAnimationLength",
    signature: "SetNodeAnimationLength(#NodeAnimation, Length)",
    documentation: "Change the #NodeAnimation length.",
    category: "NodeAnimation",
    returnType: "",
  },
  {
    name: "GetNodeAnimationWeight",
    signature: "Result = GetNodeAnimationWeight(#NodeAnimation)",
    documentation:
      "Returns the #NodeAnimation weight. The weight is useful when playing several animations at once. For example to do a smooth transition from one animation to another, it is possible to reduce progressively the weight of the first animation and increase the weight of the second animation.",
    category: "NodeAnimation",
    returnType: "i",
  },
  {
    name: "SetNodeAnimationWeight",
    signature: "SetNodeAnimationWeight(#NodeAnimation, Weight)",
    documentation:
      "Changes the #NodeAnimation weight. The weight is useful when playing several animations at once. For example to do a smooth transition from one animation to another, it is possible to reduce progressively the weight of the first animation and increase the weight of the second animation.",
    category: "NodeAnimation",
    returnType: "",
  },
  // ── OnError ───────────────────────────────────────
  {
    name: "OnErrorExit",
    signature: "OnErrorExit()",
    documentation:
      "Changes the action taken if an error occurs to directly exit the program, even if the default action on the system is not to exit the program on this kind of error. The system may display an error dialog or print an error-message on the console on exit.",
    category: "OnError",
    returnType: "",
  },
  {
    name: "OnErrorCall",
    signature: "OnErrorCall(@ErrorHandler())",
    documentation:
      "Changes the action taken if an error occurs to call the specified handler procedure. The handler can display information about the error to the user using the commands of this library and do any needed cleanup to shutdown the application. The program will end as soon as the handler returns.",
    category: "OnError",
    returnType: "",
  },
  {
    name: "OnErrorGoto",
    signature: "OnErrorGoto(?LabelAddress)",
    documentation:
      "Changes the action taken when an error occurs to jump to the specified label address and continue program execution there. After the jump to the label, the functions of this library can be used to get further information about the error.",
    category: "OnError",
    returnType: "",
  },
  {
    name: "OnErrorDefault",
    signature: "OnErrorDefault()",
    documentation:
      "Changes the action taken when an error occurs back to the system default. This usually means displaying an error dialog and exiting the program, but it may also mean to just ignore certain errors. To exit the program on every error, use OnErrorExit() .",
    category: "OnError",
    returnType: "",
  },
  {
    name: "ErrorCode",
    signature: "Result = ErrorCode()",
    documentation:
      "Returns the error code of the currently handled error. This command only returns a meaningful value if there was an error handled by OnErrorCall() or OnErrorGoto() .",
    category: "OnError",
    returnType: "i",
  },
  {
    name: "ErrorMessage",
    signature: "Result\\$ = ErrorMessage([ErrorCode])",
    documentation:
      "Returns an error-message for the given error code in english.",
    category: "OnError",
    returnType: "",
  },
  {
    name: "ErrorLine",
    signature: "Result = ErrorLine()",
    documentation:
      "Returns the line number in the source code where the current error occurred. This command only returns a meaningful value if there was an error handled by OnErrorCall() or OnErrorGoto() . The tracking of line numbers needs to be enabled on compilation for this command to return the",
    category: "OnError",
    returnType: "i",
  },
  {
    name: "ErrorFile",
    signature: "Result\\$ = ErrorFile()",
    documentation:
      "Returns the filename of the source code or includefile where the current error occurred. This command only returns a meaningful value if there was an error handled by OnErrorCall() or OnErrorGoto() . The tracking of line numbers needs to be enabled on compilation for this command to return the",
    category: "OnError",
    returnType: "",
  },
  {
    name: "ErrorAddress",
    signature: "Result = ErrorAddress()",
    documentation:
      "Returns the memory address of the assembly instruction that caused the current error. This command only returns a meaningful value if there was an error handled by OnErrorCall() or OnErrorGoto() .",
    category: "OnError",
    returnType: "i",
  },
  {
    name: "ErrorTargetAddress",
    signature: "Result = ErrorTargetAddress()",
    documentation:
      "After an error with the code #PB_OnError_InvalidMemory, this command returns the memory address which was read/written when the error occurred. This command has no meaning for other error codes.",
    category: "OnError",
    returnType: "i",
  },
  {
    name: "ErrorRegister",
    signature: "Result = ErrorRegister(Register)",
    documentation:
      "Returns the content of the specified CPU register at the time of the error. This command only returns a meaningful value if there was an error handled by OnErrorCall() or OnErrorGoto() .",
    category: "OnError",
    returnType: "i",
  },
  {
    name: "RaiseError",
    signature: "RaiseError(ErrorNumber)",
    documentation:
      "Artificially create the given error. The appropriate error action will be taken (call of the error handler or program termination by the system if no handler is set). The ErrorNumber will be available inside the error handler with the ErrorCode() command.",
    category: "OnError",
    returnType: "",
  },
  {
    name: "ExamineAssembly",
    signature: "Result = ExamineAssembly(*Address [, *EndAddress])",
    documentation:
      "Initializes the disassembling at the given address or address range. Important: The disassembly commands use the Udis86 disassembler library to decode the instructions. This library is released under the BSD license which can be viewed here . If",
    category: "OnError",
    returnType: "i",
  },
  {
    name: "NextInstruction",
    signature: "Result = NextInstruction()",
    documentation:
      "Disassembles the next instruction after a call to ExamineAssembly() . Information about the disassembled instruction can be read with InstructionString() and InstructionAddress() .",
    category: "OnError",
    returnType: "i",
  },
  {
    name: "InstructionAddress",
    signature: "Result = InstructionAddress()",
    documentation:
      "Returns the address of the instruction that was disassembled by a call to NextInstruction() .",
    category: "OnError",
    returnType: "i",
  },
  {
    name: "InstructionString",
    signature: "Result\\$ = InstructionString()",
    documentation:
      "Returns a string representation of the instruction that was disassembled by a call to NextInstruction() .",
    category: "OnError",
    returnType: "",
  },
  // ── Packer ───────────────────────────────────────
  {
    name: "AddPackFile",
    signature: "Result = AddPackFile(#Pack, Filename$, PackedFilename$)",
    documentation:
      "Add and compress the file to the specified pack previously created with CreatePack() . Adding a large file can take a long time.",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "AddPackDirectory",
    signature: "Result = AddPackDirectory(#Pack, DirectoryName$)",
    documentation:
      "Add a new empty directory to the specified pack previously created with CreatePack() .",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "AddPackMemory",
    signature: "Result = AddPackMemory(#Pack, *Buffer, Size, PackedFilename$)",
    documentation:
      "Add and compress the memory buffer to the specified pack previously created with CreatePack() .",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "ClosePack",
    signature: "ClosePack(#Pack)",
    documentation: "Close the specified pack file.",
    category: "Packer",
    returnType: "",
  },
  {
    name: "CompressMemory",
    signature: "Result = CompressMemory(*Buffer, Size, *Output, OutputSize [,",
    documentation:
      "Compress the buffer content into the output buffer. The output buffer length needs to be at least as long as the buffer to compress.",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "ExaminePack",
    signature: "Result = ExaminePack(#Pack)",
    documentation:
      "Start to examine the pack content. NextPackEntry() has to be called to list the entries found in the pack file. The pack has to be previously opened with OpenPack() or CatchPack() . Packs being created with CreatePack() can not be examined.",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "NextPackEntry",
    signature: "Result = NextPackEntry(#Pack)",
    documentation:
      "Go to the next entry in the pack file. ExaminePack() has to be called before calling this command. To get more information about the current entry, use PackEntrySize() , PackEntryType() and PackEntryName() . To uncompress the current entry, use UncompressPackMemory() or",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "PackEntryDate",
    signature: "Result.q = PackEntryDate(#Pack [, DateType])",
    documentation:
      "Returns the file date of the current pack entry, set with NextPackEntry() .",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "PackEntryType",
    signature: "Result = PackEntryType(#Pack)",
    documentation:
      "Returns the type of the current entry, set with NextPackEntry() .",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "PackEntrySize",
    signature: "Result = PackEntrySize(#Pack [, Mode])",
    documentation:
      "Returns the size of the current entry, set with NextPackEntry() .",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "PackEntryName",
    signature: "Result\\$ = PackEntryName(#Pack)",
    documentation:
      "Returns the name of the current entry, set with NextPackEntry() .",
    category: "Packer",
    returnType: "",
  },
  {
    name: "CreatePack",
    signature: "Result = CreatePack(#Pack, Filename$ [, Plugin [, Level]])",
    documentation:
      "Create a new empty pack file. If the file already exists, it will be replaced with a new empty file. Before creating a pack file, at least one packer has to be registered with one of the following command: UseZipPacker() , UseBriefLZPacker() .",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "OpenPack",
    signature: "Result = OpenPack(#Pack, Filename$ [, Plugin])",
    documentation:
      "Open a previously existing pack file. Before opening a pack file, at least one packer has to be registeredwithoneofthefollowingcommand: UseZipPacker(),UseLzmaPacker(), UseTarPacker() , UseBriefLZPacker() . Once opened, the pack content can be listed with ExaminePack() .",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "CatchPack",
    signature: "Result = CatchPack(#Pack, *MemoryAddress, Size [, Plugin])",
    documentation:
      "Open a previously existing pack file from memory. Before opening a pack file, at least one packer has to be registered with one of the following command: UseZipPacker() , UseLzmaPacker() , UseTarPacker() , UseBriefLZPacker() . Once opened, the pack content can be listed with",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "UncompressMemory",
    signature:
      "Result = UncompressMemory(*Buffer, Size, *Output, OutputSize [,",
    documentation:
      "Uncompress the buffer content into the output buffer. The output buffer length needs to be at least as long as the buffer to uncompress.",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "UncompressPackMemory",
    signature: "Result = UncompressPackMemory(#Pack, *Buffer, Size [,",
    documentation:
      "Uncompress into the memory buffer from the current pack entry being examined with ExaminePack() and NextPackEntry() .",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "UncompressPackFile",
    signature:
      "Result = UncompressPackFile(#Pack, Filename$ [, PackedFilename$])",
    documentation:
      "Uncompress into the specified filename from the current pack entry being examined with ExaminePack() and NextPackEntry() . If the filename already exists, it will erased and replaced with the new uncompressed data.",
    category: "Packer",
    returnType: "i",
  },
  {
    name: "UseZipPacker",
    signature: "UseZipPacker()",
    documentation:
      "Enable Zip compress, uncompress and archive support to the packer library. The created pack will be compatible with other Zip archives in 2.0 format. The created archive size can be up to 2GB. For more information: Wikipedia - Zip.",
    category: "Packer",
    returnType: "",
  },
  {
    name: "UseLzmaPacker",
    signature: "UseLzmaPacker()",
    documentation:
      "Enable Lzma compress, uncompress and 7z archive support to the packer library. Lzma compression is considered as one of the best available multipurpose compression algorithm. It provides very good compress ratio and fast uncompress. Compressing can be slow.",
    category: "Packer",
    returnType: "",
  },
  {
    name: "UseTarPacker",
    signature: "UseTarPacker()",
    documentation:
      "Enable Tar compress, uncompress and Tar archive support to the packer library. Bzip2 and Gzip compression are both supported. Compressing and uncompressing Tar archives are usually fast.",
    category: "Packer",
    returnType: "",
  },
  {
    name: "UseBriefLZPacker",
    signature: "UseBriefLZPacker()",
    documentation:
      "Enable BriefLZ compress, uncompress and archive support to the packer library. The created archives are a custom format created for PureBasic. BriefLZ compression is very fast and the packer is very small, it could be the right choice for program which needs a small executable size.",
    category: "Packer",
    returnType: "",
  },
  {
    name: "UseJcalg1Packer",
    signature: "UseJcalg1Packer()",
    documentation:
      "Enable Jcalg1 uncompress support to the packer library. This is an old algorithm which was used in previous version of PureBasic, so it is still available to allow to support old compressed files. Compression and archive support is no more available. This packer is only available on Windows",
    category: "Packer",
    returnType: "",
  },
  {
    name: "IsPack",
    signature: "Result = IsPack(#Pack)",
    documentation:
      "Tests if the given pack number is a valid and correctly initialized pack.",
    category: "Packer",
    returnType: "i",
  },
  // ── Particle ───────────────────────────────────────
  {
    name: "CreateParticleEmitter",
    signature:
      "Result = CreateParticleEmitter(#ParticleEmitter, Width, Height,",
    documentation: "Creates a new empty particle emitter of the given size.",
    category: "Particle",
    returnType: "i",
  },
  {
    name: "IsParticleEmitter",
    signature: "Result = IsParticleEmitter(#ParticleEmitter)",
    documentation:
      "Tests if the given particle emitter is valid and correctly initialized.",
    category: "Particle",
    returnType: "i",
  },
  {
    name: "DisableParticleEmitter",
    signature: "DisableParticleEmitter(#ParticleEmitter, State)",
    documentation:
      "Enables or disables the particle emitter. When disabled, no more particle are emitted.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleEmitterID",
    signature: "ParticleEmitterID = ParticleEmitterID(#ParticleEmitter)",
    documentation:
      "Returns the unique system identifier of the particle emitter.",
    category: "Particle",
    returnType: "i",
  },
  {
    name: "ParticleEmitterX",
    signature: "Result = ParticleEmitterX(#ParticleEmitter [, Mode])",
    documentation: "Returns the particle emitter ’x’ position in the world.",
    category: "Particle",
    returnType: "i",
  },
  {
    name: "ParticleEmitterY",
    signature: "Result = ParticleEmitterY(#ParticleEmitter [, Mode])",
    documentation: "Returns the particle emitter ’y’ position in the world.",
    category: "Particle",
    returnType: "i",
  },
  {
    name: "ParticleEmitterZ",
    signature: "Result = ParticleEmitterZ(#ParticleEmitter [, Mode])",
    documentation: "Returns the particle emitter ’z’ position in the world.",
    category: "Particle",
    returnType: "i",
  },
  {
    name: "ParticleEmitterAngle",
    signature: "ParticleEmitterAngle(#ParticleEmitter, Angle.f)",
    documentation:
      "Changes the emitted particle angles. All particules will have the same angle.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleEmissionRate",
    signature: "ParticleEmissionRate(#ParticleEmitter, Rate)",
    documentation: "Changes the #ParticleEmitter emission rate.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleMaterial",
    signature: "ParticleMaterial(#ParticleEmitter, MaterialID)",
    documentation:
      "Assigns a material to the specified particle emitter. This material will be used by all the particles of this emitter. An emitter can only have one material assigned at once.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleTimeToLive",
    signature: "ParticleTimeToLive(#ParticleEmitter, MinimumTime, MaximumTime)",
    documentation:
      "Change the particles time to live for the particle emitter. Every particle will live at least ’MinimumTime’ and at most the ’MaximumTime’ (in world time unit). A random value, within this range, will be used by every particle emitted.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleVelocity",
    signature: "ParticleVelocity(#ParticleEmitter, Minimum, Maximum)",
    documentation:
      "Changes the particles velocity. A random velocity value, picked in the ’Minimum’ and ’Maximum’ range, will be used by every particle emitted.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleAcceleration",
    signature: "ParticleAcceleration(#ParticleEmitter, x.f, y.f, z.f)",
    documentation:
      "Changes the particles acceleration vector. It can be useful to simulate gravity, wind, etc.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleSize",
    signature: "ParticleSize(#ParticleEmitter, Width, Height)",
    documentation:
      "Change the particles dimensions. Particles are 2D planes (billboards) which always face the camera. All particles in an emitter always have the same size.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleColorRange",
    signature: "ParticleColorRange(#ParticleEmitter, StartColor, EndColor)",
    documentation:
      "Changes the particles color range for the particle emitter. Every emitted particle will get a random value, within the ’StartColor’ and ’EndColor’ range (gradient between these two color).",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleColorFader",
    signature: "ParticleColorFader(#ParticleEmitter, RedRate.f, GreenRate.f,",
    documentation: "Changes the particles color fader rate.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "FreeParticleEmitter",
    signature: "FreeParticleEmitter(#ParticleEmitter)",
    documentation:
      "Frees the particle emitter. All its associated memory is released and this object can’t be used anymore.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "HideParticleEmitter",
    signature: "HideParticleEmitter(#ParticleEmitter, State)",
    documentation: "Hides or shows the specified particle emitter.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "MoveParticleEmitter",
    signature: "MoveParticleEmitter(#ParticleEmitter, x.f, y.f, z.f [, Mode])",
    documentation: "Move the specified particle emitter.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleEmitterDirection",
    signature: "ParticleEmitterDirection(#ParticleEmitter, x.f, y.f, z.f)",
    documentation:
      "Changes the direction of the particle emitter according to the specified x,y,z values.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ResizeParticleEmitter",
    signature: "ResizeParticleEmitter(#ParticleEmitter, Width, Height, Depth)",
    documentation:
      "Resizes the particle emitter to the new specified ’Width’, ’Height’ and ’Depth’ dimension.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "GetScriptParticleEmitter",
    signature: "Result = GetScriptParticleEmitter(#ParticleEmitter, Name$)",
    documentation: "Gets a particle emitter defined in an OGRE script file.",
    category: "Particle",
    returnType: "i",
  },
  {
    name: "ParticleSpeedFactor",
    signature: "ParticleSpeedFactor(#ParticleEmitter, Factor.f)",
    documentation: "Changes the current particle emitter speed factor.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleScaleRate",
    signature: "ParticleScaleRate(#ParticleEmitter, Rate.f)",
    documentation: "Changes the current particle emitter scale rate.",
    category: "Particle",
    returnType: "",
  },
  {
    name: "ParticleAngle",
    signature: "ParticleAngle(#ParticleEmitter, RangeStart.f, RangeEnd.f [,",
    documentation: "Changes the particle angle when emitted.",
    category: "Particle",
    returnType: "",
  },
  // ── Preference ───────────────────────────────────────
  {
    name: "ClosePreferences",
    signature: "ClosePreferences()",
    documentation:
      "Closes a preference file previously opened with OpenPreferences() or created with CreatePreferences() .",
    category: "Preference",
    returnType: "",
  },
  {
    name: "CreatePreferences",
    signature: "Result = CreatePreferences(Filename$ [, Flags])",
    documentation:
      "Creates a new empty preference file. If the file already exists, the file is erased.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "ExaminePreferenceGroups",
    signature: "Result = ExaminePreferenceGroups()",
    documentation:
      "Starts the enumeration of all the groups found in the current preference file. NextPreferenceGroup() can be used to list all the group found.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "ExaminePreferenceKeys",
    signature: "Result = ExaminePreferenceKeys()",
    documentation:
      "Starts the enumeration of all the keys found in the current group of the preference file. The current group can be selected with PreferenceGroup() or by examining all groups with ExaminePreferenceGroups() . NextPreferenceKey() can be used to list all the keys found.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "FlushPreferenceBuffers",
    signature: "Result = FlushPreferenceBuffers()",
    documentation: "Ensures that all preferences changes are written to disk.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "NextPreferenceGroup",
    signature: "Result = NextPreferenceGroup()",
    documentation:
      "Retrieves information about the next group found in the enumeration started with ExaminePreferenceGroups() . To get the name of the group, use PreferenceGroupName() . The current examined preference group will also be used when values are read from the preferences or",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "NextPreferenceKey",
    signature: "Result = NextPreferenceKey()",
    documentation:
      "Retrieves information about the next key found in the enumeration started with ExaminePreferenceKeys() . To get the name and the value of the key, use PreferenceKeyName() and PreferenceKeyValue() .",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "PreferenceGroupName",
    signature: "Group\\$ = PreferenceGroupName()",
    documentation:
      "Returns the name of the current group being enumerated with ExaminePreferenceGroups() or previously selected with PreferenceGroup() .",
    category: "Preference",
    returnType: "",
  },
  {
    name: "PreferenceKeyName",
    signature: "Key\\$ = PreferenceKeyName()",
    documentation:
      "Returns the name of the current key being enumerated with ExaminePreferenceKeys() . To get the value of the key, use PreferenceKeyValue() .",
    category: "Preference",
    returnType: "",
  },
  {
    name: "PreferenceKeyValue",
    signature: "Value\\$ = PreferenceKeyValue()",
    documentation:
      "Returns the value, in string form, of the current key being enumerated with ExaminePreferenceKeys() . To get the name of the key, use PreferenceKeyName() .",
    category: "Preference",
    returnType: "",
  },
  {
    name: "OpenPreferences",
    signature: "Result = OpenPreferences(Filename$ [, Flags [, Encoding]])",
    documentation: "Opens a previously existing preference file.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "PreferenceGroup",
    signature: "Result = PreferenceGroup(Name$)",
    documentation:
      "Creates a new group (in the form: [Name$]) or changes the current group in the preference file. All following read or write operations will be restricted to this group. To move outside of any groups, an empty ’Name$’ can be used.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "PreferenceComment",
    signature: "PreferenceComment(Text$)",
    documentation: "Writes a new comment line in the current preference file.",
    category: "Preference",
    returnType: "",
  },
  {
    name: "ReadPreferenceDouble",
    signature: "Result.d = ReadPreferenceDouble(Key$, DefaultValue)",
    documentation: "Try to read the specified associated ’Key$’ value.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "ReadPreferenceFloat",
    signature: "Result.f = ReadPreferenceFloat(Key$, DefaultValue)",
    documentation: "Try to read the specified associated ’Key$’ value.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "ReadPreferenceInteger",
    signature: "Result = ReadPreferenceInteger(Key$, DefaultValue)",
    documentation: "Try to read the specified associated ’Key$’ value.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "ReadPreferenceLong",
    signature: "Result = ReadPreferenceLong(Key$, DefaultValue)",
    documentation: "Try to read the specified associated ’Key$’ value.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "ReadPreferenceQuad",
    signature: "Result.q = ReadPreferenceQuad(Key$, DefaultValue)",
    documentation: "Try to read the specified associated ’Key$’ value.",
    category: "Preference",
    returnType: "i",
  },
  {
    name: "ReadPreferenceString",
    signature: "Result\\$ = ReadPreferenceString(Key$, DefaultValue$)",
    documentation: "Try to read the specified associated ’Key$’ value.",
    category: "Preference",
    returnType: "",
  },
  {
    name: "RemovePreferenceGroup",
    signature: "RemovePreferenceGroup(Group$)",
    documentation: "Removes the specified ’Group$’ and all its keys.",
    category: "Preference",
    returnType: "",
  },
  {
    name: "RemovePreferenceKey",
    signature: "RemovePreferenceKey(Key$)",
    documentation: "Removes the specified key and its value.",
    category: "Preference",
    returnType: "",
  },
  {
    name: "WritePreferenceFloat",
    signature: "WritePreferenceFloat(Key$, Value.f)",
    documentation:
      "Creates or changes the specified key and its associated float value under the form: ’Key$ = Value’ in the preference file, previously created with CreatePreferences() or opened with OpenPreferences() .",
    category: "Preference",
    returnType: "",
  },
  {
    name: "WritePreferenceDouble",
    signature: "WritePreferenceDouble(Key$, Value.d)",
    documentation:
      "Creates or changes the specified key and its associated double value under the form: ’Key$ = Value’ in the preference file, previously created with CreatePreferences() or opened with OpenPreferences() .",
    category: "Preference",
    returnType: "",
  },
  {
    name: "WritePreferenceInteger",
    signature: "WritePreferenceInteger(Key$, Value)",
    documentation:
      "Creates or changes the specified key and its associated integer value under the form: ’Key$ = Value’ in the preference file, previously created with CreatePreferences() or opened with OpenPreferences() .",
    category: "Preference",
    returnType: "",
  },
  {
    name: "WritePreferenceLong",
    signature: "WritePreferenceLong(Key$, Value)",
    documentation:
      "Creates or changes the specified key and its associated long value under the form: ’Key$ = Value’ in the preference file, previously created with CreatePreferences() or opened with OpenPreferences() .",
    category: "Preference",
    returnType: "",
  },
  {
    name: "WritePreferenceQuad",
    signature: "WritePreferenceQuad(Key$, Value.q)",
    documentation:
      "Creates or changes the specified key and its associated float value under the form: ’Key$ = Value’ in the preference file, previously created with CreatePreferences() or opened with OpenPreferences() .",
    category: "Preference",
    returnType: "",
  },
  {
    name: "WritePreferenceString",
    signature: "WritePreferenceString(Key$, Value$)",
    documentation:
      "Creates or changes the specified key and its associated string value under the form: ’Key$ = Value’ in the preference file, previously created with CreatePreferences() or opened with OpenPreferences() .",
    category: "Preference",
    returnType: "",
  },
  // ── Printer ───────────────────────────────────────
  {
    name: "DefaultPrinter",
    signature: "Result = DefaultPrinter()",
    documentation:
      "Selects the default printer as the current printer for print operation. This function has to be called before all other printer functions. Once DefaultPrinter() has been successfully called, StartPrinting() is used to actually start printing.",
    category: "Printer",
    returnType: "i",
  },
  {
    name: "NewPrinterPage",
    signature: "NewPrinterPage()",
    documentation:
      "Creates a new empty page. The previous page is sent to the printer and can’t be modified anymore. It has to be called inside a StartDrawing() /StopDrawing() block.",
    category: "Printer",
    returnType: "",
  },
  {
    name: "PrinterOutput",
    signature: "OutputID = PrinterOutput()",
    documentation:
      "Returns the OutputID of the current printer to be used with the StartDrawing() function. Drawing on the printer will be performed using pixel based drawing operations.",
    category: "Printer",
    returnType: "i",
  },
  {
    name: "PrinterVectorOutput",
    signature: "VectorOutputID = PrinterVectorOutput([Unit])",
    documentation:
      "Returns the OutputID of the current printer to be used with the StartVectorDrawing() function.",
    category: "Printer",
    returnType: "i",
  },
  {
    name: "PrintRequester",
    signature: "Result = PrintRequester()",
    documentation:
      "Open a regular print requester, to choose the printer and do some adjustments. This function must be called before all other printer functions. Once PrintRequester() has been successfully called, StartPrinting() is used to actually start printing.",
    category: "Printer",
    returnType: "i",
  },
  {
    name: "StartPrinting",
    signature: "Result = StartPrinting(JobName$)",
    documentation: "Initializes the printer and starts the print operation.",
    category: "Printer",
    returnType: "i",
  },
  {
    name: "StopPrinting",
    signature: "StopPrinting()",
    documentation:
      "Stop all the print operations and send the data to the printer.",
    category: "Printer",
    returnType: "",
  },
  {
    name: "PrinterPageWidth",
    signature: "Result = PrinterPageWidth()",
    documentation: "Return the width of the drawing area.",
    category: "Printer",
    returnType: "i",
  },
  {
    name: "PrinterPageHeight",
    signature: "Result = PrinterPageHeight()",
    documentation: "Returns the height of the drawing area.",
    category: "Printer",
    returnType: "i",
  },
  // ── Process ───────────────────────────────────────
  {
    name: "AvailableProgramOutput",
    signature: "Result = AvailableProgramOutput(Program)",
    documentation:
      "Returns the number of bytes available to be read from the programs output.",
    category: "Process",
    returnType: "i",
  },
  {
    name: "CloseProgram",
    signature: "CloseProgram(Program)",
    documentation:
      "Closes the connection with the given program (which was started with RunProgram() ) and frees all related data.",
    category: "Process",
    returnType: "",
  },
  {
    name: "CountProgramParameters",
    signature: "Result = CountProgramParameters()",
    documentation:
      "Returns the number of parameters specified on the command line (or via RunProgram() ).",
    category: "Process",
    returnType: "i",
  },
  {
    name: "EnvironmentVariableName",
    signature: "Result\\$ = EnvironmentVariableName()",
    documentation:
      "Returns the name of the current environment variable currently examined with ExamineEnvironmentVariables() and NextEnvironmentVariable() . EnvironmentVariableValue() may be used to return its value.",
    category: "Process",
    returnType: "",
  },
  {
    name: "EnvironmentVariableValue",
    signature: "Result\\$ = EnvironmentVariableValue()",
    documentation:
      "Returns the value of the current environment variable currently examined with ExamineEnvironmentVariables() and NextEnvironmentVariable() . EnvironmentVariableName() may be used to return its name.",
    category: "Process",
    returnType: "",
  },
  {
    name: "ExamineEnvironmentVariables",
    signature: "Result = ExamineEnvironmentVariables()",
    documentation:
      "Starts to examine the environment block of the program. NextEnvironmentVariable() , EnvironmentVariableName() and EnvironmentVariableValue() may be used to read the individual environment variables.",
    category: "Process",
    returnType: "i",
  },
  {
    name: "GetEnvironmentVariable",
    signature: "Result\\$ = GetEnvironmentVariable(Name$)",
    documentation:
      "Returns the content of the specified environment variable from the programs environment block.",
    category: "Process",
    returnType: "",
  },
  {
    name: "IsProgram",
    signature: "Result = IsProgram(Program)",
    documentation:
      "Tests if the given program is a program that is executed by the RunProgram() function.",
    category: "Process",
    returnType: "i",
  },
  {
    name: "KillProgram",
    signature: "KillProgram(Program)",
    documentation:
      "Immediately terminates the given program (which was previously started with RunProgram() ).",
    category: "Process",
    returnType: "",
  },
  {
    name: "NextEnvironmentVariable",
    signature: "Result = NextEnvironmentVariable()",
    documentation:
      "This function must be called after ExamineEnvironmentVariables() . It will go step-by-step through the environment variables of the program.",
    category: "Process",
    returnType: "i",
  },
  {
    name: "ProgramExitCode",
    signature: "Result = ProgramExitCode(Program)",
    documentation:
      "Returns the exitcode that was returned when the given program ended.",
    category: "Process",
    returnType: "i",
  },
  {
    name: "ProgramFilename",
    signature: "Result\\$ = ProgramFilename()",
    documentation:
      "Returns the full path and filename of this program and may be used to find where the program is installed or the executable name. GetPathPart() or GetFilePart() may be used to get the path or filename of the program from the return string.",
    category: "Process",
    returnType: "",
  },
  {
    name: "ProgramID",
    signature: "Result = ProgramID(Program)",
    documentation:
      "Returns the unique system identifier for the given program. This is the so called ”Process ID” or ”PID”.",
    category: "Process",
    returnType: "i",
  },
  {
    name: "ProgramParameter",
    signature: "Result\\$ = ProgramParameter([Index])",
    documentation:
      "Gets the next parameter string that was passed to the executable when it was launched.",
    category: "Process",
    returnType: "",
  },
  {
    name: "ProgramRunning",
    signature: "Result = ProgramRunning(Program)",
    documentation: "Tests if the specified program is still running.",
    category: "Process",
    returnType: "i",
  },
  {
    name: "ReadProgramData",
    signature: "Result = ReadProgramData(Program, *Buffer, Size)",
    documentation:
      "Reads data from the given programs output (stdout) and puts it in the specified buffer. This function waits until there is data available to read from the program. To prevent this wait, AvailableProgramOutput() may be used first to check if there is something to read.",
    category: "Process",
    returnType: "i",
  },
  {
    name: "ReadProgramError",
    signature: "Result\\$ = ReadProgramError(Program [, Flags])",
    documentation:
      "Reads a line from the specified programs error output (stderr). Unlike ReadProgramData() , this function doesn’t halt the program flow if no error output is available.",
    category: "Process",
    returnType: "",
  },
  {
    name: "ReadProgramString",
    signature: "Result\\$ = ReadProgramString(Program [, Flags])",
    documentation:
      "Reads a line from the output (stdout) of the given program. This function waits until there is data available to read from the program. To prevent this wait, AvailableProgramOutput() may be used first to check if there is something to read. This function also waits until a full line of output is",
    category: "Process",
    returnType: "",
  },
  {
    name: "RemoveEnvironmentVariable",
    signature: "RemoveEnvironmentVariable(Name$)",
    documentation:
      "Removes the given environment variable from the programs environment block.",
    category: "Process",
    returnType: "",
  },
  {
    name: "RunProgram",
    signature:
      "Result = RunProgram(Filename$ [, Parameter$, WorkingDirectory$ [,",
    documentation: "Launches an external program.",
    category: "Process",
    returnType: "i",
  },
  {
    name: "SetEnvironmentVariable",
    signature: "SetEnvironmentVariable(Name$, Value$)",
    documentation:
      "Creates an environment variable in the environment block of this program with given name and value. If a variable with this name already existed, its content will be changed to the new value. The environment block of the program is passed on to other programs executed with",
    category: "Process",
    returnType: "",
  },
  {
    name: "WaitProgram",
    signature: "Result = WaitProgram(Program [, Timeout])",
    documentation:
      "Halts the execution of the code until the specified program has ended or the optional timeout is reached.",
    category: "Process",
    returnType: "i",
  },
  {
    name: "WriteProgramData",
    signature: "Result = WriteProgramData(Program, *Buffer, Size)",
    documentation:
      "Writes the data from the buffer to the specified programs input (stdin).",
    category: "Process",
    returnType: "i",
  },
  {
    name: "WriteProgramString",
    signature: "WriteProgramString(Program, String$ [, Flags])",
    documentation:
      "Writes the given string to the specified programs input (stdin).",
    category: "Process",
    returnType: "",
  },
  {
    name: "WriteProgramStringN",
    signature: "WriteProgramStringN(Program, String$ [, Flags])",
    documentation:
      "Writes the given string to the specified programs input (stdin) with an extra newline character.",
    category: "Process",
    returnType: "",
  },
  // ── RegularExpression ───────────────────────────────────────
  {
    name: "CountRegularExpressionGroups",
    signature: "Result = CountRegularExpressionGroups(#RegularExpression)",
    documentation:
      "Returns the number of groups defined in the #RegularExpression. The matches of regular expression groups can be accessed with functions like RegularExpressionGroup() .",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "CreateRegularExpression",
    signature:
      "Result = CreateRegularExpression(#RegularExpression, Pattern$ [,",
    documentation:
      "Create a new regular expression using the specified pattern.",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "ExamineRegularExpression",
    signature: "Result = ExamineRegularExpression(#RegularExpression, String$)",
    documentation:
      "Starts matching the #RegularExpression against the given String$. Individual matches can be iterated using the NextRegularExpressionMatch() function. From each match, the matching string, its position/length and any groups within the match can be extracted with the appropriate",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "ExtractRegularExpression",
    signature: "Result = ExtractRegularExpression(#RegularExpression, String$,",
    documentation:
      "Extracts strings according to the #RegularExpression into an array.",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "FreeRegularExpression",
    signature: "FreeRegularExpression(#RegularExpression)",
    documentation:
      "Free the specified #RegularExpression and release its associated memory.",
    category: "RegularExpression",
    returnType: "",
  },
  {
    name: "IsRegularExpression",
    signature: "Result = IsRegularExpression(#RegularExpression)",
    documentation:
      "Tests if the given #RegularExpression number is a valid and correctly initialized, regular expression.",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "MatchRegularExpression",
    signature: "Result = MatchRegularExpression(#RegularExpression, String$)",
    documentation: "Tests the string against the #RegularExpression.",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "NextRegularExpressionMatch",
    signature: "Result = NextRegularExpressionMatch(#RegularExpression)",
    documentation:
      "Iterates over all regular expression matches in the target string after a call to ExamineRegularExpression() .",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "RegularExpressionMatchString",
    signature: "Result\\$ = RegularExpressionMatchString(#RegularExpression)",
    documentation:
      "Returns the string that matched the #RegularExpression in the last call to NextRegularExpressionMatch() .",
    category: "RegularExpression",
    returnType: "",
  },
  {
    name: "RegularExpressionMatchPosition",
    signature: "Result = RegularExpressionMatchPosition(#RegularExpression)",
    documentation:
      "Returns the position within the input string (passed to ExamineRegularExpression() ) of the current match after a call to NextRegularExpressionMatch() .",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "RegularExpressionMatchLength",
    signature: "Result = RegularExpressionMatchLength(#RegularExpression)",
    documentation:
      "Returns the length in characters of the current matching string after a call to NextRegularExpressionMatch() .",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "RegularExpressionGroup",
    signature: "Result\\$ = RegularExpressionGroup(#RegularExpression, Group)",
    documentation:
      "Extract the string matched by a group within the regular expression after a call to NextRegularExpressionMatch() .",
    category: "RegularExpression",
    returnType: "",
  },
  {
    name: "RegularExpressionGroupPosition",
    signature:
      "Result = RegularExpressionGroupPosition(#RegularExpression, Group)",
    documentation:
      "Returns the position (within the current matching string) of the specified group after a call to NextRegularExpressionMatch() .",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "RegularExpressionGroupLength",
    signature:
      "Result = RegularExpressionGroupLength(#RegularExpression, Group)",
    documentation:
      "Returns the length of the specified regular expression group after a call to NextRegularExpressionMatch() .",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "RegularExpressionNamedGroup",
    signature: "Result\\$ = RegularExpressionNamedGroup(#RegularExpression,",
    documentation:
      "Extract the string matched by a named group within the regular expression after a call to NextRegularExpressionMatch() .",
    category: "RegularExpression",
    returnType: "",
  },
  {
    name: "RegularExpressionNamedGroupPosition",
    signature:
      "Result = RegularExpressionNamedGroupPosition(#RegularExpression,",
    documentation:
      "Returns the position (within the current matching string) of the specified named group after a call to NextRegularExpressionMatch() .",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "RegularExpressionNamedGroupLength",
    signature: "Result = RegularExpressionNamedGroupLength(#RegularExpression,",
    documentation:
      "Returns the length of the specified named regular expression group after a call to NextRegularExpressionMatch() .",
    category: "RegularExpression",
    returnType: "i",
  },
  {
    name: "ReplaceRegularExpression",
    signature:
      "Result\\$ = ReplaceRegularExpression(#RegularExpression, String$,",
    documentation:
      "Replaces all strings matching the #RegularExpression with ’ReplaceString$’.",
    category: "RegularExpression",
    returnType: "",
  },
  {
    name: "RegularExpressionError",
    signature: "Result\\$ = RegularExpressionError()",
    documentation:
      "Returns an human readable error (in english) about the latest failure of CreateRegularExpression() .",
    category: "RegularExpression",
    returnType: "",
  },
  // ── Requester ───────────────────────────────────────
  {
    name: "ColorRequester",
    signature: "Color = ColorRequester([CurrentColor [, ParentID])",
    documentation:
      "Opens the standard requester to choose a color. The chosen color is returned under a 24-bit number containing the red, green and blue value, as usual.",
    category: "Requester",
    returnType: "i",
  },
  {
    name: "FontRequester",
    signature:
      "Result = FontRequester(FontName$, FontSize, Flags [, Color [, Style",
    documentation:
      "Opens the standard requester to choose a font. The functions SelectedFontColor() , SelectedFontName() , SelectedFontSize() and SelectedFontStyle() can be used after a successful call to get the needed information about the selected font.",
    category: "Requester",
    returnType: "i",
  },
  {
    name: "InputRequester",
    signature:
      "Text\\$ = InputRequester(Title$, Message$, DefaultText$ [, Flags [,",
    documentation: "Opens a blocking input requester to enter some text.",
    category: "Requester",
    returnType: "",
  },
  {
    name: "MessageRequester",
    signature:
      "Result = MessageRequester(Title$, Text$ [, Flags [, ParentID]])",
    documentation:
      "Opens a blocking requester to display some information. The program execution is totally stopped until the user close the requester.",
    category: "Requester",
    returnType: "i",
  },
  {
    name: "NextSelectedFilename",
    signature: "Filename\\$ = NextSelectedFilename()",
    documentation:
      "After OpenFileRequester() with #PB_Requester_MultiSelection, it returns the next selected file (if any).",
    category: "Requester",
    returnType: "",
  },
  {
    name: "OpenFileRequester",
    signature:
      "Filename\\$ = OpenFileRequester(Title$, DefaultFile$, Pattern$,",
    documentation:
      "Opens the standard requester for the user to choose a file. The title can be specified to replace the default one. The DefaultFile$ is useful to initialize the requester in the right directory and with the right filename.",
    category: "Requester",
    returnType: "",
  },
  {
    name: "PathRequester",
    signature: "Path\\$ = PathRequester(Title$, InitialPath$ [, ParendID])",
    documentation:
      "Opens the standard path requester for the user to select a path.",
    category: "Requester",
    returnType: "",
  },
  {
    name: "SaveFileRequester",
    signature:
      "Filename\\$ = SaveFileRequester(Title$, DefaultFile$, Pattern$,",
    documentation: "Opens the standard requester for the user to save a file.",
    category: "Requester",
    returnType: "",
  },
  {
    name: "SelectedFilePattern",
    signature: "Result = SelectedFilePattern()",
    documentation:
      "Returns the selected pattern index chosen with OpenFileRequester() or SaveFileRequester() .",
    category: "Requester",
    returnType: "i",
  },
  {
    name: "SelectedFontColor",
    signature: "Color = SelectedFontColor()",
    documentation:
      "Returns the color of the font chosen by the user with the FontRequester() .",
    category: "Requester",
    returnType: "i",
  },
  {
    name: "SelectedFontName",
    signature: "Name\\$ = SelectedFontName()",
    documentation:
      "Returns the name of the font chosen by the user with the FontRequester() .",
    category: "Requester",
    returnType: "",
  },
  {
    name: "SelectedFontSize",
    signature: "Size = SelectedFontSize()",
    documentation:
      "Returns the size of the font chosen by the user with the FontRequester() .",
    category: "Requester",
    returnType: "i",
  },
  {
    name: "SelectedFontStyle",
    signature: "Style = SelectedFontStyle()",
    documentation:
      "Returns the style of the font chosen by the user with the FontRequester() .",
    category: "Requester",
    returnType: "i",
  },
  // ── Runtime ───────────────────────────────────────
  {
    name: "GetRuntimeInteger",
    signature: "Result = GetRuntimeInteger(Object$)",
    documentation:
      "Returns the integer value of the runtime object. If the runtime object is a procedure, it returns the procedure address.",
    category: "Runtime",
    returnType: "i",
  },
  {
    name: "GetRuntimeDouble",
    signature: "Result = GetRuntimeDouble(Object$)",
    documentation: "Returns the double value of the runtime object.",
    category: "Runtime",
    returnType: "i",
  },
  {
    name: "GetRuntimeString",
    signature: "Result\\$ = GetRuntimeString(Object$)",
    documentation: "Returns the string value of the runtime object.",
    category: "Runtime",
    returnType: "",
  },
  {
    name: "IsRuntime",
    signature: "Result = IsRuntime(Object$)",
    documentation: "Checks if the specified object is declared as runtime .",
    category: "Runtime",
    returnType: "i",
  },
  {
    name: "SetRuntimeDouble",
    signature: "SetRuntimeDouble(Object$, Value)",
    documentation: "Changes the double value of the runtime object.",
    category: "Runtime",
    returnType: "",
  },
  {
    name: "SetRuntimeInteger",
    signature: "SetRuntimeInteger(Object$, Value)",
    documentation: "Changes the integer value of the runtime object.",
    category: "Runtime",
    returnType: "",
  },
  {
    name: "SetRuntimeString",
    signature: "SetRuntimeString(Object$, Value$)",
    documentation: "Changes the string value of the runtime object.",
    category: "Runtime",
    returnType: "",
  },
  // ── Scintilla ───────────────────────────────────────
  {
    name: "InitScintilla",
    signature: "Result = InitScintilla([LibraryName$])",
    documentation:
      "Warning This function is deprecated, it may be removed in a future version of PureBasic. It should not be used in newly written code. This command is deprecated and no more needed.",
    category: "Scintilla",
    returnType: "i",
  },
  {
    name: "ScintillaGadget",
    signature:
      "Result = ScintillaGadget(#Gadget, x, y, Width, Height, @Callback())",
    documentation:
      "Creates a new scintilla editing control in the current GadgetList.",
    category: "Scintilla",
    returnType: "i",
  },
  {
    name: "ScintillaSendMessage",
    signature:
      "Result = ScintillaSendMessage(#Gadget, Message [, Param [, LParam]])",
    documentation:
      "Sends a message to the scintilla control to perform a specific task.",
    category: "Scintilla",
    returnType: "i",
  },
  // ── Screen ───────────────────────────────────────
  {
    name: "ChangeGamma",
    signature: "ChangeGamma(RedIntensity, GreenIntensity, BlueIntensity)",
    documentation:
      "Changes the Gamma for the current screen. This only works in full screen mode (not in windowed mode). Red, Green and Blue channels intensity can be changed individually. This function can be used to do full screen fade-in/fade-out, color splashing etc. If it does not do anything, then the",
    category: "Screen",
    returnType: "",
  },
  {
    name: "ClearScreen",
    signature: "ClearScreen(Color)",
    documentation: "Clear the whole screen with the specified color.",
    category: "Screen",
    returnType: "",
  },
  {
    name: "CloseScreen",
    signature: "CloseScreen()",
    documentation:
      "Close the current screen (either windowed or full screen mode). After closing a screen, all the sprites must be reloaded as the screen format has been lost and the video memory released. An application or game can switch from full screen to windowed mode on the fly without any problem.",
    category: "Screen",
    returnType: "",
  },
  {
    name: "FlipBuffers",
    signature: "FlipBuffers()",
    documentation:
      "Flip the back and front buffers of the current screen. The invisible area is now visible and vice versa, which allowss to do a ’double-buffering’ effect (flicker free graphical displays). A screen must have been opened with OpenScreen() or OpenWindowedScreen() . The way the buffer are flipped",
    category: "Screen",
    returnType: "",
  },
  {
    name: "IsScreenActive",
    signature: "Result = IsScreenActive()",
    documentation:
      "Games and full screen applications using PureBasic functions run under a multitasking environment. This means that the user can switch back from full screen to the normal desktop. This change can be detected with this function and appropriate actions should be taken, such as",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "ScreenID",
    signature: "Result = ScreenID()",
    documentation: "Returns the OS ScreenID.",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "ScreenWidth",
    signature: "Result = ScreenWidth()",
    documentation:
      "Returns the current screen width, previously opened with OpenScreen() or OpenWindowedScreen() .",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "ScreenHeight",
    signature: "Result = ScreenHeight()",
    documentation:
      "Returns the current screen height, previously opened with OpenScreen() or OpenWindowedScreen() .",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "ScreenDepth",
    signature: "Result = ScreenDepth()",
    documentation:
      "Returns the current screen depth, previously opened with OpenScreen() or OpenWindowedScreen() .",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "SetFrameRate",
    signature: "SetFrameRate(FrameRate)",
    documentation:
      "Set the frame rate (in frames per second) for the current screen. This is especially useful for windowed screen mode where there is no refresh rate for the screen. This function sets the maximum number of times per second that the FlipBuffers() function is called.",
    category: "Screen",
    returnType: "",
  },
  {
    name: "OpenScreen",
    signature:
      "Result = OpenScreen(Width, Height, Depth, Title$ [, FlipMode [,",
    documentation:
      "Opens a new screen according to the specified ’Width’, ’Height’ and ’Depth’. InitSprite() has to be called successfully before using this command. The opened screen is created with 2 video buffers to allow double buffering, especially useful for games. The buffers can be manipulated with the",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "OpenWindowedScreen",
    signature: "Result = OpenWindowedScreen(WindowID, x, y, Width, Height [,",
    documentation:
      "Open a new screen area according to given parameters on the given Window, which must be opened before using OpenWindow() . InitSprite() has to be called successfully before using this command. The ”windowed screen” is able to use the hardware acceleration the same way than",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "ScreenOutput",
    signature: "OutputID = ScreenOutput()",
    documentation:
      "Returns the OutputID of the currently used screen to perform 2D rendering operations on it. It will use the PureBasic 2DDrawing library and can only be used within a StartDrawing() / StopDrawing() block. The memory allocated in ScreenOutput() is released on StopDrawing().",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "ExamineScreenModes",
    signature: "Result = ExamineScreenModes()",
    documentation:
      "Starts to examine the available screen modes on the local computer. The screen modes list can be retrieved with the help of the NextScreenMode() function.",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "NextScreenMode",
    signature: "Result = NextScreenMode()",
    documentation:
      "This function should be called after ExamineScreenModes() . It will go step-by-step into the screen modes list. The current screen mode information can be retrieved with the following functions: ScreenModeWidth() , ScreenModeHeight() , ScreenModeDepth() and ScreenModeRefreshRate() .",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "ScreenModeDepth",
    signature: "Depth = ScreenModeDepth()",
    documentation:
      "Returns the depth of the current screenmode listed with ExamineScreenModes() and NextScreenMode() functions.",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "ScreenModeHeight",
    signature: "Height = ScreenModeHeight()",
    documentation:
      "Returns the height of the current screenmode listed with ExamineScreenModes() and NextScreenMode() functions.",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "ScreenModeRefreshRate",
    signature: "RefreshRate = ScreenModeRefreshRate()",
    documentation:
      "Returns the refresh-rate of the current screenmode listed with ExamineScreenModes() and NextScreenMode() functions.",
    category: "Screen",
    returnType: "i",
  },
  {
    name: "ScreenModeWidth",
    signature: "Width = ScreenModeWidth()",
    documentation:
      "Returns the width of the current screenmode listed with ExamineScreenModes() and NextScreenMode() functions.",
    category: "Screen",
    returnType: "i",
  },
  // ── SerialPort ───────────────────────────────────────
  {
    name: "AvailableSerialPortInput",
    signature: "Result = AvailableSerialPortInput(#SerialPort)",
    documentation:
      "Returns the number of remaining bytes in the serial port input buffer.",
    category: "SerialPort",
    returnType: "i",
  },
  {
    name: "AvailableSerialPortOutput",
    signature: "Result = AvailableSerialPortOutput(#SerialPort)",
    documentation:
      "Returns the number of remaining bytes in the serial port output buffer.",
    category: "SerialPort",
    returnType: "i",
  },
  {
    name: "CloseSerialPort",
    signature: "CloseSerialPort(#SerialPort)",
    documentation:
      "Closes the serial port previously opened with OpenSerialPort() .",
    category: "SerialPort",
    returnType: "",
  },
  {
    name: "GetSerialPortStatus",
    signature: "Result = GetSerialPortStatus(#SerialPort, Attribute)",
    documentation: "Returns the specified serial port status.",
    category: "SerialPort",
    returnType: "i",
  },
  {
    name: "IsSerialPort",
    signature: "Result = IsSerialPort(#SerialPort)",
    documentation:
      "Tests if the given serial port is valid and correctly initialized.",
    category: "SerialPort",
    returnType: "i",
  },
  {
    name: "SerialPortError",
    signature: "Result = SerialPortError(#SerialPort)",
    documentation:
      "Returns the error on the serial port when ReadSerialPortData() , WriteSerialPortData() or WriteSerialPortString() failed.",
    category: "SerialPort",
    returnType: "i",
  },
  {
    name: "SerialPortID",
    signature: "SerialPortID = SerialPortID(#SerialPort)",
    documentation: "Returns the unique system identifier of the serial port.",
    category: "SerialPort",
    returnType: "i",
  },
  {
    name: "OpenSerialPort",
    signature: "Result = OpenSerialPort(#SerialPort, SerialPortName$, Bauds,",
    documentation: "Opens a serial port for use.",
    category: "SerialPort",
    returnType: "i",
  },
  {
    name: "ReadSerialPortData",
    signature: "Result = ReadSerialPortData(#SerialPort, *Buffer, Length)",
    documentation:
      "Reads an arbitrary amount of data from the #SerialPort. If the input buffer was empty, this function will block until data is available. To check if data is available, use AvailableSerialPortInput() .",
    category: "SerialPort",
    returnType: "i",
  },
  {
    name: "SerialPortTimeouts",
    signature: "SerialPortTimeouts(#SerialPort, RIT, RTTC, RTTM, WTTC, WTTM)",
    documentation: "Changes the default serial port timeouts.",
    category: "SerialPort",
    returnType: "",
  },
  {
    name: "SetSerialPortStatus",
    signature: "SetSerialPortStatus(#SerialPort, Attribute, Value)",
    documentation: "Changes the specified serial port status.",
    category: "SerialPort",
    returnType: "",
  },
  {
    name: "WriteSerialPortData",
    signature: "Result = WriteSerialPortData(#SerialPort, *Buffer, Length)",
    documentation:
      "Writes an arbitrary amount of data to the specified serial port.",
    category: "SerialPort",
    returnType: "i",
  },
  {
    name: "WriteSerialPortString",
    signature:
      "Result = WriteSerialPortString(#SerialPort, String$ [, Format])",
    documentation: "Writes a string to the specified serial port.",
    category: "SerialPort",
    returnType: "i",
  },
  // ── Skeleton ───────────────────────────────────────
  {
    name: "CreateSkeleton",
    signature: "CreateSkeleton(#Mesh)",
    documentation: "Creates or replaces the skeleton of the #Mesh.",
    category: "Skeleton",
    returnType: "",
  },
  {
    name: "CreateBone",
    signature: "CreateBone(#Mesh, Bone$, ParentBone$, x, y, z, RotationX,",
    documentation:
      "Creates a new bone for the specified #Mesh. If the mesh doesn’t have a skeleton, it has to be created with CreateSkeleton() before using this command.",
    category: "Skeleton",
    returnType: "",
  },
  {
    name: "VertexBoneAssignment",
    signature: "VertexBoneAssignment(#Mesh, SubMesh, VertexIndex, BoneIndex,",
    documentation:
      "Assign a vertex to a bone (the same vertex can be assigned to several bones: the sum of bone weight must be equals to 1). Once the vertex assignment is finished, FinishBoneAssignment() has to be called.",
    category: "Skeleton",
    returnType: "",
  },
  {
    name: "FinishBoneAssignment",
    signature: "FinishBoneAssignment(#Mesh, SubMesh)",
    documentation:
      "Finish bone assignments for a mesh, previously started with VertexBoneAssignment() .",
    category: "Skeleton",
    returnType: "",
  },
  {
    name: "CreateSkeletonAnimation",
    signature: "CreateSkeletonAnimation(#Mesh, AnimationName$, Length)",
    documentation:
      "Creates a new skeleton animation. A skeleton has to be created for this mesh with CreateSkeleton() . The new animation is empty and steps have to be created with AddSkeletonAnimationKeyFrame() .",
    category: "Skeleton",
    returnType: "",
  },
  {
    name: "AddSkeletonAnimationKeyFrame",
    signature:
      "AddSkeletonAnimationKeyFrame(#Mesh, AnimationName$, Bone$, Time,",
    documentation:
      "Creates a new step for the specified animation. A skeleton animation can be created with CreateSkeletonAnimation() .",
    category: "Skeleton",
    returnType: "",
  },
  // ── Sort ───────────────────────────────────────
  {
    name: "CustomSortArray",
    signature: "CustomSortArray(ArrayName(), @CompareProcedure() [, Options [,",
    documentation:
      "Sorts the specified array , according to the given options using a custom procedure to compare array elements. The array may have a structure or one of basic type : byte, word, long, integer, string or float. Multi-dimensioned arrays are not supported.",
    category: "Sort",
    returnType: "",
  },
  {
    name: "CustomSortList",
    signature:
      "CustomSortList(ListName(), @CompareProcedure() [, Options [, Start,",
    documentation:
      "Sorts the specified list , according to the given options using a custom procedure to compare list elements. The list may have a structure or one of basic type : byte, word, long, integer, string or float.",
    category: "Sort",
    returnType: "",
  },
  {
    name: "SortArray",
    signature: "SortArray(ArrayName(), Options [, Start, End])",
    documentation:
      "Sorts the specified array , according to the given options. The array may be of one of basic type : byte, word, long, integer, string or float. For structured arrays, use SortStructuredArray() . Multi-dimensioned arrays are not supported.",
    category: "Sort",
    returnType: "",
  },
  {
    name: "SortList",
    signature: "SortList(ListName(), Options [, Start, End])",
    documentation:
      "Sorts the specified list , according to the given options. The list may be of one of basic type : byte, word, long, integer, string or float. For structured list, use SortStructuredList() .",
    category: "Sort",
    returnType: "",
  },
  {
    name: "SortStructuredArray",
    signature: "SortStructuredArray(ArrayName(), Options,",
    documentation:
      "Sorts the specified structured array , according to the given options. The array must have an associated structure .",
    category: "Sort",
    returnType: "",
  },
  {
    name: "SortStructuredList",
    signature:
      "SortStructuredList(ListName(), Options, OffsetOf(Structure\\Field),",
    documentation:
      "Sorts the specified structured list , according to the given options. The list must have an associated structure .",
    category: "Sort",
    returnType: "",
  },
  {
    name: "RandomizeArray",
    signature: "RandomizeArray(ArrayName() [, Start, End])",
    documentation:
      "Reorders the elements of the given array in a random order.",
    category: "Sort",
    returnType: "",
  },
  {
    name: "RandomizeList",
    signature: "RandomizeList(List() [, Start, End])",
    documentation: "Reorders the elements of the given list in a random order.",
    category: "Sort",
    returnType: "",
  },
  // ── Sound ───────────────────────────────────────
  {
    name: "CatchSound",
    signature: "Result = CatchSound(#Sound, *Buffer [, Size [, Flags]])",
    documentation:
      "Load a WAV (in PCM format, ADPCM is not supported) or any other format supported by the SoundPlugin library found at the specified address. The following functions can be used to enable automatically more sound formats: UseFLACSoundDecoder()",
    category: "Sound",
    returnType: "i",
  },
  {
    name: "GetSoundPosition",
    signature: "Result = GetSoundPosition(#Sound [, Mode [, Channel]])",
    documentation: "Get the current sound position.",
    category: "Sound",
    returnType: "i",
  },
  {
    name: "SetSoundPosition",
    signature: "SetSoundPosition(#Sound, Position, [, Mode [, Channel]])",
    documentation: "Set the current sound position.",
    category: "Sound",
    returnType: "",
  },
  {
    name: "FreeSound",
    signature: "FreeSound(#Sound)",
    documentation:
      "Stops and removes a sound previously loaded with LoadSound() or CatchSound() from memory. Once a sound has been freed, it can’t be played anymore.",
    category: "Sound",
    returnType: "",
  },
  {
    name: "InitSound",
    signature: "Result = InitSound([NbMaxChannels])",
    documentation:
      "Initializes the sound environment. This function must be always called before any other sound function and should always check its result. If the sound environment fails, it’s absolutely necessary to disable all the sound functions calls.",
    category: "Sound",
    returnType: "i",
  },
  {
    name: "IsSound",
    signature: "Result = IsSound(#Sound)",
    documentation:
      "Tests if the specified number is a valid and correctly initialized sound.",
    category: "Sound",
    returnType: "i",
  },
  {
    name: "LoadSound",
    signature: "Result = LoadSound(#Sound, Filename$ [, Flags])",
    documentation:
      "Load a WAV (in PCM format, ADPCM is not supported) or any other format supported by the SoundPlugin library into memory. The following functions can be used to enable automatically more sound format: UseFLACSoundDecoder()",
    category: "Sound",
    returnType: "i",
  },
  {
    name: "PauseSound",
    signature: "PauseSound(#Sound [, Channel])",
    documentation: "Pause the sound.",
    category: "Sound",
    returnType: "",
  },
  {
    name: "ResumeSound",
    signature: "ResumeSound(#Sound [, Channel])",
    documentation: "Resume the sound playing.",
    category: "Sound",
    returnType: "",
  },
  {
    name: "PlaySound",
    signature: "Result = PlaySound(#Sound [, Flags [, Volume]])",
    documentation: "Start to play the specified sound.",
    category: "Sound",
    returnType: "i",
  },
  {
    name: "GetSoundFrequency",
    signature: "Result = GetSoundFrequency(#Sound [, Channel])",
    documentation: "Get the current frequency of the sound.",
    category: "Sound",
    returnType: "i",
  },
  {
    name: "SetSoundFrequency",
    signature: "SetSoundFrequency(#Sound, Frequency [, Channel])",
    documentation:
      "Set the new frequency, in real-time, for the sound. The new frequency value is saved for the sound, so it’s not needed to call it every time.",
    category: "Sound",
    returnType: "",
  },
  {
    name: "SoundStatus",
    signature: "Result = SoundStatus(#Sound [, Channel])",
    documentation: "Get the current sound status.",
    category: "Sound",
    returnType: "i",
  },
  {
    name: "SoundPan",
    signature: "SoundPan(#Sound, Pan [, Channel])",
    documentation:
      "Sets the new pan value, in real-time, for the #Sound. The pan value is saved for the #Sound, so it’s not needed to call it every time. The panning is a way to play a sound on a stereo equipment.",
    category: "Sound",
    returnType: "",
  },
  {
    name: "SoundLength",
    signature: "SoundLength(#Sound [, Mode])",
    documentation: "Get the length of the sound.",
    category: "Sound",
    returnType: "",
  },
  {
    name: "SoundVolume",
    signature: "SoundVolume(#Sound, Volume.f [, Channel])",
    documentation: "Change the sound volume, in real-time.",
    category: "Sound",
    returnType: "",
  },
  {
    name: "StopSound",
    signature: "StopSound(#Sound [, Channel])",
    documentation: "Stops the specified sound (if it was playing).",
    category: "Sound",
    returnType: "",
  },
  // ── Sound3D ───────────────────────────────────────
  {
    name: "FreeSound3D",
    signature: "FreeSound3D(#Sound3D)",
    documentation:
      "Stop and remove a 3D sound previously loaded with LoadSound3D() from memory. Once a sound has been freed, it can’t be played anymore.",
    category: "Sound3D",
    returnType: "",
  },
  {
    name: "IsSound3D",
    signature: "Result = IsSound3D(#Sound3D)",
    documentation:
      "Tests if the given sound is valid and correctly initialized.",
    category: "Sound3D",
    returnType: "i",
  },
  {
    name: "LoadSound3D",
    signature: "Result = LoadSound3D(#Sound3D, Filename$ [, Flags])",
    documentation:
      "Loads a mono WAV or OGG sound file. The sound has to be mono, as stereo sounds don’t allow spacial positioning.",
    category: "Sound3D",
    returnType: "i",
  },
  {
    name: "PlaySound3D",
    signature: "PlaySound3D(#Sound3D [, Flags])",
    documentation: "Starts to play the specified sound.",
    category: "Sound3D",
    returnType: "",
  },
  {
    name: "SoundVolume3D",
    signature: "SoundVolume3D(#Sound3D, Volume)",
    documentation:
      "Set the new volume, in real-time, for the #Sound3D. The volume value is saved for the #Sound3D, so it’s not needed to call it every time.",
    category: "Sound3D",
    returnType: "",
  },
  {
    name: "StopSound3D",
    signature: "StopSound3D(#Sound3D)",
    documentation: "Stops the specified sound (if it was playing).",
    category: "Sound3D",
    returnType: "",
  },
  {
    name: "SoundID3D",
    signature: "SoundID3D = SoundID3D(#Sound3D)",
    documentation: "Returns the unique system identifier of the sound.",
    category: "Sound3D",
    returnType: "i",
  },
  {
    name: "SoundRange3D",
    signature: "SoundRange3D(#Sound3D, Minimum, Maximum)",
    documentation: "Set the range, in world units, for the sound emission.",
    category: "Sound3D",
    returnType: "",
  },
  {
    name: "SoundCone3D",
    signature:
      "SoundCone3D(#Sound3D, InnerCone.f, OuterCone.f, OuterConeVolume)",
    documentation: "Set the cone angle, to create a directional sound.",
    category: "Sound3D",
    returnType: "",
  },
  {
    name: "SoundListenerLocate",
    signature: "SoundListenerLocate(x, y, z)",
    documentation:
      "Changes the absolute sound listener (the ear) location in the world.",
    category: "Sound3D",
    returnType: "",
  },
  // ── SoundPlugin ───────────────────────────────────────
  {
    name: "UseFLACSoundDecoder",
    signature: "UseFLACSoundDecoder()",
    documentation:
      "Enables the FLAC (Free Lossless Audio Codec) sound support for CatchSound() and LoadSound() . Sound streaming is supported for this plug-in.",
    category: "SoundPlugin",
    returnType: "",
  },
  {
    name: "UseOGGSoundDecoder",
    signature: "UseOGGSoundDecoder()",
    documentation:
      "Enables the OGG (OGG Vorbis) sound support for CatchSound() and LoadSound() . Sound streaming is supported for this plug-in.",
    category: "SoundPlugin",
    returnType: "",
  },
  // ── SpecialEffect ───────────────────────────────────────
  {
    name: "CreateCompositorEffect",
    signature:
      "Result = CreateCompositorEffect(#Effect, CameraID, EffectName$)",
    documentation:
      "Create a new compositor effect. Once created, the effect is immediately applied to the rendering. It is possible to hide the effect with HideEffect() .",
    category: "SpecialEffect",
    returnType: "i",
  },
  {
    name: "CreateRibbonEffect",
    signature: "Result = CreateRibbonEffect(#Effect, MaterialID, NbChains,",
    documentation:
      "Create a new ribbon trail effect. Once created, the effect has to be attached with AttachRibbonEffect() . It is possible to hide the effect with HideEffect() .",
    category: "SpecialEffect",
    returnType: "i",
  },
  {
    name: "RibbonEffectWidth",
    signature: "RibbonEffectWidth(#Effect, ChainIndex, Width, FadeoutWidth)",
    documentation: "Changed the ribbon chain width.",
    category: "SpecialEffect",
    returnType: "",
  },
  {
    name: "AttachRibbonEffect",
    signature: "AttachRibbonEffect(#Effect, NodeID)",
    documentation: "Attach the ribbon to the given node.",
    category: "SpecialEffect",
    returnType: "",
  },
  {
    name: "DetachRibbonEffect",
    signature: "DetachRibbonEffect(#Effect, NodeID)",
    documentation: "Detach the ribbon from the given node.",
    category: "SpecialEffect",
    returnType: "",
  },
  {
    name: "CreateLensFlareEffect",
    signature: "CreateLensFlareEffect(#Effect, CameraID, NodeID, BurstSize,",
    documentation:
      "Create a new lensflare effect for the given camera. A lensflare is always attached to a node, and will be displayed automatically depending of the node position relative to the camera view.",
    category: "SpecialEffect",
    returnType: "",
  },
  {
    name: "LensFlareEffectColor",
    signature: "LensFlareEffectColor(#Effect, ColorType, Color)",
    documentation: "Changes the color of the specified lens flare effect part.",
    category: "SpecialEffect",
    returnType: "",
  },
  {
    name: "FreeEffect",
    signature: "FreeEffect(#Effect)",
    documentation: "Free the specified effect.",
    category: "SpecialEffect",
    returnType: "",
  },
  {
    name: "IsEffect",
    signature: "Result = IsEffect(#Effect)",
    documentation:
      "Tests if the given effect number is a valid and correctly initialized effect.",
    category: "SpecialEffect",
    returnType: "i",
  },
  {
    name: "HideEffect",
    signature: "HideEffect(#Effect, State)",
    documentation: "Hide or show the specified effect.",
    category: "SpecialEffect",
    returnType: "",
  },
  {
    name: "CompositorEffectParameter",
    signature: "CompositorEffectParameter(#Effect, TechniqueID, PassID,",
    documentation: "Set real-time parameter on the specified effect.",
    category: "SpecialEffect",
    returnType: "",
  },
  {
    name: "RibbonEffectColor",
    signature: "RibbonEffectColor(#Effect, ChainIndex, Color, FadeoutColor)",
    documentation: "Set the colors for the ribbon trail.",
    category: "SpecialEffect",
    returnType: "",
  },
  // ── Spline ───────────────────────────────────────
  {
    name: "CreateSpline",
    signature: "Result = CreateSpline(#Spline)",
    documentation:
      "Creates a new spline. A spline doesn’t exist physically in the 3D world, it is a virtual object which can be used for different purposes, like path-finding, smooth node moving (be sure to check NodeAnimation library for this as well) and more. To calculate the position of an intermediate",
    category: "Spline",
    returnType: "i",
  },
  {
    name: "FreeSpline",
    signature: "FreeSpline(#Spline)",
    documentation:
      "Frees a spline and releases all its associated memory. This spline must not be used (by using its number with the other functions in this library) after calling this function, unless you create it again.",
    category: "Spline",
    returnType: "",
  },
  {
    name: "AddSplinePoint",
    signature: "AddSplinePoint(#Spline, x, y, z)",
    documentation:
      "Add a new point to the spline. The time to go from one point to another is always the same, independent from the distance between these points.",
    category: "Spline",
    returnType: "",
  },
  {
    name: "ClearSpline",
    signature: "ClearSpline(#Spline)",
    documentation:
      "Clear the spline. All points will be removed from the spline.",
    category: "Spline",
    returnType: "",
  },
  {
    name: "CountSplinePoints",
    signature: "Result = CountSplinePoints(#Spline)",
    documentation: "Returns the number of points in the spline.",
    category: "Spline",
    returnType: "i",
  },
  {
    name: "SplinePointX",
    signature: "Result = SplinePointX(#Spline, PointIndex)",
    documentation: "Returns the spline point ’x’ position.",
    category: "Spline",
    returnType: "i",
  },
  {
    name: "SplinePointY",
    signature: "Result = SplinePointY(#Spline, PointIndex)",
    documentation: "Returns the spline point ’y’ position.",
    category: "Spline",
    returnType: "i",
  },
  {
    name: "SplinePointZ",
    signature: "Result = SplinePointZ(#Spline, PointIndex)",
    documentation: "Returns the spline point ’z’ position.",
    category: "Spline",
    returnType: "i",
  },
  {
    name: "UpdateSplinePoint",
    signature: "UpdateSplinePoint(#Spline, PointIndex, x, y, z)",
    documentation:
      "Update the specified point in the spline. The time to go from one point to another is always the same, independent from the distance between these points.",
    category: "Spline",
    returnType: "",
  },
  {
    name: "ComputeSpline",
    signature: "ComputeSpline(#Spline, Offset)",
    documentation:
      "Computes the spline point position at the specified offset. Once the point has been computed, its position is available with SplineX() , SplineY() and SplineZ() .",
    category: "Spline",
    returnType: "",
  },
  {
    name: "SplineX",
    signature: "Result = SplineX(#Spline)",
    documentation:
      "Returns the spline’s ’x’ position in the world, after a ComputeSpline() .",
    category: "Spline",
    returnType: "i",
  },
  {
    name: "SplineY",
    signature: "Result = SplineY(#Spline)",
    documentation:
      "Returns the spline’s ’y’ position in the world, after a ComputeSpline() .",
    category: "Spline",
    returnType: "i",
  },
  {
    name: "SplineZ",
    signature: "Result = SplineZ(#Spline)",
    documentation:
      "Returns the spline’s ’z’ position in the world, after a ComputeSpline() .",
    category: "Spline",
    returnType: "i",
  },
  // ── Sprite ───────────────────────────────────────
  {
    name: "CatchSprite",
    signature: "Result = CatchSprite(#Sprite, *MemoryAddress [, Mode])",
    documentation:
      "Loads the specified sprite from the given memory area. A screen should be opened with OpenScreen() or OpenWindowedScreen() before loading a sprite. Sprites can be in BMP format or any other format supported by the ImagePlugin library . A catched sprite can be freed by using",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "ClipSprite",
    signature: "ClipSprite(#Sprite, x, y, Width, Height)",
    documentation:
      "Adds a clip zone to the specified sprite. For example, if a sprite is 100*100 (Width*Height) and a clipping zone is added as x=10, y=10, Width=20, Height=20 then when the sprite is displayed, only the rectangular area starting from x=10, y=10 with width=20 and height=20 will be",
    category: "Sprite",
    returnType: "",
  },
  {
    name: "CopySprite",
    signature: "Result = CopySprite(#Sprite1, #Sprite2 [, Mode])",
    documentation: "Copy the #Sprite1 to #Sprite2.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "CreateSprite",
    signature: "Result = CreateSprite(#Sprite, Width, Height [, Flags])",
    documentation:
      "Creates an empty sprite with the specified dimensions. SpriteOutput() can be used to draw on the sprite.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "DisplaySprite",
    signature: "DisplaySprite(#Sprite, x, y)",
    documentation:
      "Displays the #Sprite at the specified position on the current screen. As there is no transparent color or blending, this function is faster than DisplayTransparentSprite() . This function is clipped, so it’s perfectly legal to display the sprite outside of the screen.",
    category: "Sprite",
    returnType: "",
  },
  {
    name: "DisplayTransparentSprite",
    signature:
      "DisplayTransparentSprite(#Sprite, x, y [, Intensity [, Color]])",
    documentation:
      "Display the #Sprite at the specified position on the current screen. The default transparent color is 0 (black - this color will not be displayed). It’s possible to change the transparent color with TransparentSpriteColor() . This function is clipped, so it’s perfectly legal to display the sprite",
    category: "Sprite",
    returnType: "",
  },
  {
    name: "FreeSprite",
    signature: "FreeSprite(#Sprite)",
    documentation:
      "Removes the specified sprite from memory. It’s not possible to use the sprite anymore after calling this function.",
    category: "Sprite",
    returnType: "",
  },
  {
    name: "GrabSprite",
    signature: "Result = GrabSprite(#Sprite, x, y, Width, Height [, Flags])",
    documentation:
      "Grabs the screen content from the area x, y, Width, Height and creates a new sprite.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "InitSprite",
    signature: "Result = InitSprite()",
    documentation:
      "Initializes the sprite environment for later use. You must put this function at the top of your source code if you want to use the sprite functions.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "IsSprite",
    signature: "Result = IsSprite(#Sprite)",
    documentation:
      "Tests if the given #Sprite number is a valid and correctly initialized, sprite.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "LoadSprite",
    signature: "Result = LoadSprite(#Sprite, Filename$ [, Mode])",
    documentation:
      "Load the specified sprite into memory for immediate use. A screen should be opened with OpenScreen() or OpenWindowedScreen() before loading a sprite. The sprite can be in BMP format or any other format supported by the ImagePlugin library . The",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "SaveSprite",
    signature:
      "Result = SaveSprite(#Sprite, Filename$ [, ImagePlugin [, Flags]])",
    documentation:
      "Saves the specified sprite to a file. By default, the saved image will be in 24-bit BMP format. Very useful for screenshots when used with the GrabSprite() function.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "SpriteCollision",
    signature: "Result = SpriteCollision(#Sprite1, x1, y1, #Sprite2, x2, y2)",
    documentation: "Tests if the two sprites are overlapping.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "SpriteDepth",
    signature: "Result = SpriteDepth(#Sprite)",
    documentation: "Returns the color depth of the specified sprite.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "SpriteHeight",
    signature: "Result = SpriteHeight(#Sprite)",
    documentation: "Returns the height (in pixels) of the specified sprite.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "SpriteID",
    signature: "SpriteID = SpriteID(#Sprite)",
    documentation: "Returns the unique system identifier of the given sprite.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "SpritePixelCollision",
    signature:
      "Result = SpritePixelCollision(#Sprite1, x1, y1, #Sprite2, x2, y2)",
    documentation:
      "Tests if the two sprites are overlapping. #PB_Sprite_PixelCollision has to be specified at the sprite creation to have this command working.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "SpriteWidth",
    signature: "Result = SpriteWidth(#Sprite)",
    documentation: "Returns the width (in pixels) of the specified sprite.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "SpriteOutput",
    signature: "OutputID = SpriteOutput(#Sprite)",
    documentation:
      "Returns the OutputID of the sprite to perform 2D rendering operation on it.",
    category: "Sprite",
    returnType: "i",
  },
  {
    name: "TransparentSpriteColor",
    signature: "TransparentSpriteColor(#Sprite, Color)",
    documentation:
      "Use the specified color as the transparent sprite color (when displayed with DisplayTransparentSprite() ). Only one color can be set as the transparent color and the previous alpha channel values are lost. If the sprite already have alpha information, this command is",
    category: "Sprite",
    returnType: "",
  },
  {
    name: "RotateSprite",
    signature: "RotateSprite(#Sprite, Angle.f, Mode)",
    documentation: "Rotates the specified #Sprite to the given ’Angle’.",
    category: "Sprite",
    returnType: "",
  },
  {
    name: "SpriteBlendingMode",
    signature: "SpriteBlendingMode(SourceMode, DestinationMode)",
    documentation:
      "Changes the way the sprite are blended with the background (when using DisplayTransparentSprite() ). This function is for advanced users only. The result can differ depending of the underlying subsystem: for example OpenGL and DirectX doesn’t behave the",
    category: "Sprite",
    returnType: "",
  },
  {
    name: "SpriteQuality",
    signature: "SpriteQuality(Quality)",
    documentation: "Changes the way the sprites are rendered.",
    category: "Sprite",
    returnType: "",
  },
  {
    name: "TransformSprite",
    signature:
      "TransformSprite(#Sprite, x1, y1, [z1], x2, y2, [z2], x3, y3, [z3],",
    documentation:
      "Transforms the sprite to the new given coordinates. This is typically used to perform real-time transformations. Warning, as a sprite is a combination of 2 triangles, the transformation could looks strange. If one of the optional ’z’ parameter is specified, all need to be specified.",
    category: "Sprite",
    returnType: "",
  },
  {
    name: "ZoomSprite",
    signature: "ZoomSprite(#Sprite, Width, Height)",
    documentation: "Zooms the specified #Sprite from the given dimension.",
    category: "Sprite",
    returnType: "",
  },
  // ── StaticGeometry ───────────────────────────────────────
  {
    name: "FreeStaticGeometry",
    signature: "FreeStaticGeometry(#StaticGeometry)",
    documentation:
      "Free the given StaticGeometry, previously initialized by CreateStaticGeometry() .",
    category: "StaticGeometry",
    returnType: "",
  },
  {
    name: "IsStaticGeometry",
    signature: "Result = IsStaticGeometry(#StaticGeometry)",
    documentation:
      "Tests if the given #StaticGeometry is a valid and correctly initialized static geometry.",
    category: "StaticGeometry",
    returnType: "i",
  },
  {
    name: "CreateStaticGeometry",
    signature: "Result = CreateStaticGeometry(#StaticGeometry, Width, Height,",
    documentation: "Create an empty static geometry.",
    category: "StaticGeometry",
    returnType: "i",
  },
  {
    name: "AddStaticGeometryEntity",
    signature: "AddStaticGeometryEntity(#StaticGeometry, EntityID, x, y, z [,",
    documentation:
      "Add an entity to the specified #StaticGeometry. The original entity is left untouched by this function and can be freed after the add. The same entity can be added multiple times.",
    category: "StaticGeometry",
    returnType: "",
  },
  {
    name: "BuildStaticGeometry",
    signature: "BuildStaticGeometry(#StaticGeometry)",
    documentation:
      "Build the final static geometry. Once created, a static geometry can’t be modified anymore.",
    category: "StaticGeometry",
    returnType: "",
  },
  // ── StatusBar ───────────────────────────────────────
  {
    name: "AddStatusBarField",
    signature: "AddStatusBarField(Width)",
    documentation:
      "Adds a field to the current statusbar previously created with CreateStatusBar() . Each new field is created after the old one.",
    category: "StatusBar",
    returnType: "",
  },
  {
    name: "CreateStatusBar",
    signature: "Result = CreateStatusBar(#StatusBar, WindowID)",
    documentation:
      "Create and add an empty #StatusBar to the specified WindowID. Once the bar is created, AddStatusBarField() can be used to setup the different parts of the bar.",
    category: "StatusBar",
    returnType: "i",
  },
  {
    name: "FreeStatusBar",
    signature: "FreeStatusBar(#StatusBar)",
    documentation: "Free the given status bar.",
    category: "StatusBar",
    returnType: "",
  },
  {
    name: "IsStatusBar",
    signature: "Result = IsStatusBar(#StatusBar)",
    documentation:
      "Tests if the given status bar number is a valid and correctly initialized status bar.",
    category: "StatusBar",
    returnType: "i",
  },
  {
    name: "StatusBarImage",
    signature: "StatusBarImage(#StatusBar, Field, ImageID [, Appearance])",
    documentation: "Sets the specified Field to display an image.",
    category: "StatusBar",
    returnType: "",
  },
  {
    name: "StatusBarID",
    signature: "StatusBarID = StatusBarID(#StatusBar)",
    documentation: "Returns the unique system identifier of the status bar.",
    category: "StatusBar",
    returnType: "i",
  },
  {
    name: "StatusBarText",
    signature: "StatusBarText(#StatusBar, Field, Text$ [, Appearance])",
    documentation: "Sets the text for the specified status bar field.",
    category: "StatusBar",
    returnType: "",
  },
  {
    name: "StatusBarProgress",
    signature:
      "StatusBarProgress(#StatusBar, Field, Value [, Appearance [, Min,",
    documentation:
      "Display a progress bar in the specified ’Field’ in the given ’#StatusBar’.",
    category: "StatusBar",
    returnType: "",
  },
  {
    name: "StatusBarHeight",
    signature: "Result = StatusBarHeight(#StatusBar)",
    documentation:
      "Returns the height in pixel of the #StatusBar. This is useful for correct calculation on window height when using a statusbar.",
    category: "StatusBar",
    returnType: "i",
  },
  // ── String ───────────────────────────────────────
  {
    name: "Asc",
    signature: "Result = Asc(String$)",
    documentation: "Return the first character value of the specified string.",
    category: "String",
    returnType: "i",
  },
  {
    name: "Bin",
    signature: "Result\\$ = Bin(Value.q [, Type])",
    documentation:
      "Converts a quad numeric number into a string, in binary format.",
    category: "String",
    returnType: "",
  },
  {
    name: "Chr",
    signature: "Text\\$ = Chr(CharacterValue)",
    documentation: "Returns a string created with the given character value.",
    category: "String",
    returnType: "",
  },
  {
    name: "CountString",
    signature: "Result = CountString(String$, StringToCount$)",
    documentation:
      "Returns the number of occurrences of StringToCount$ found in String$.",
    category: "String",
    returnType: "i",
  },
  {
    name: "EscapeString",
    signature: "Result\\$ = EscapeString(String$ [, Mode])",
    documentation:
      "Returns the escaped version of the string. UnescapeString() can be used to do the reverse operation.",
    category: "String",
    returnType: "",
  },
  {
    name: "FindString",
    signature:
      "Position = FindString(String$, StringToFind$ [, StartPosition [,",
    documentation: "Find the ’StringToFind$’ within the given ’String$’.",
    category: "String",
    returnType: "i",
  },
  {
    name: "Hex",
    signature: "Result\\$ = Hex(Value.q [, Type])",
    documentation:
      "Converts a quad numeric number into a string, in hexadecimal format.",
    category: "String",
    returnType: "",
  },
  {
    name: "InsertString",
    signature: "Result\\$ = InsertString(String$, StringToInsert$, Position)",
    documentation:
      "Inserts ’StringToInsert$’ into ’String$’ at the specified ’Position’.",
    category: "String",
    returnType: "",
  },
  {
    name: "LCase",
    signature: "Result\\$ = LCase(String$)",
    documentation: "Returns the string converted into lower case characters.",
    category: "String",
    returnType: "",
  },
  {
    name: "Left",
    signature: "Result\\$ = Left(String$, Length)",
    documentation:
      "Returns the specified number of characters from the left side of the string.",
    category: "String",
    returnType: "",
  },
  {
    name: "Len",
    signature: "Length = Len(String$)",
    documentation: "Returns the character length of the string.",
    category: "String",
    returnType: "i",
  },
  {
    name: "LSet",
    signature: "Result\\$ = LSet(String$, Length [, Character$])",
    documentation:
      "Adjusts the length of a string by adding characters at the end of the string if necessary to reach the specified length.",
    category: "String",
    returnType: "",
  },
  {
    name: "LTrim",
    signature: "Result\\$ = LTrim(String$ [, Character$])",
    documentation:
      "Removes all the specified characters located in the front of a string.",
    category: "String",
    returnType: "",
  },
  {
    name: "Mid",
    signature: "Result\\$ = Mid(String$, StartPosition [, Length])",
    documentation:
      "Extracts a string of specified length from the given string.",
    category: "String",
    returnType: "",
  },
  {
    name: "RemoveString",
    signature: "String\\$ = RemoveString(String$, StringToRemove$ [, Mode [,",
    documentation:
      "Finds all occurrences of ’StringToRemove$’ within the specified ’String$’ and removes them.",
    category: "String",
    returnType: "",
  },
  {
    name: "ReplaceString",
    signature:
      "String\\$ = ReplaceString(String$, StringToFind$, ReplacementString$",
    documentation:
      "Try to find any occurrences of ’StringToFind$’ in the given ’String$’ and replace them with ’ReplacementString$’.",
    category: "String",
    returnType: "",
  },
  {
    name: "Right",
    signature: "Result\\$ = Right(String$, Length)",
    documentation:
      "Returns the specified number of characters from the right side of the string.",
    category: "String",
    returnType: "",
  },
  {
    name: "RSet",
    signature: "Result\\$ = RSet(String$, Length [, Character$])",
    documentation:
      "Adjusts the length of the string by adding characters at the beginning of the string if necessary to reach the specified length.",
    category: "String",
    returnType: "",
  },
  {
    name: "RTrim",
    signature: "Result\\$ = RTrim(String$ [, Character$])",
    documentation:
      "Removes all the specified characters located at the end of a string.",
    category: "String",
    returnType: "",
  },
  {
    name: "StringByteLength",
    signature: "Result = StringByteLength(String$ [, Format])",
    documentation:
      "Returns the number of bytes required to store the string in memory in a given format.",
    category: "String",
    returnType: "i",
  },
  {
    name: "StringField",
    signature: "Result\\$ = StringField(String$, Index, Delimiter$)",
    documentation: "Returns the string field at the specified index.",
    category: "String",
    returnType: "",
  },
  {
    name: "StrF",
    signature: "Result\\$ = StrF(Value.f [, NbDecimal])",
    documentation: "Converts a float number into a string.",
    category: "String",
    returnType: "",
  },
  {
    name: "StrD",
    signature: "Result\\$ = StrD(Value.d [, NbDecimal])",
    documentation: "Converts a double number into a string.",
    category: "String",
    returnType: "",
  },
  {
    name: "Str",
    signature: "Result\\$ = Str(Value.q)",
    documentation: "Convert a signed quad number into a string.",
    category: "String",
    returnType: "",
  },
  {
    name: "StrU",
    signature: "Result\\$ = StrU(Value.q [, Type])",
    documentation: "Converts an unsigned numeric number into a string.",
    category: "String",
    returnType: "",
  },
  {
    name: "ReverseString",
    signature: "Result\\$ = ReverseString(String$)",
    documentation:
      "Reverses all the characters in the ’String$’. The last characters becomes the first characters, and vice-versa.",
    category: "String",
    returnType: "",
  },
  {
    name: "Space",
    signature: "Result\\$ = Space(Length)",
    documentation:
      "Creates a string of the given length filled with ’space’ characters.",
    category: "String",
    returnType: "",
  },
  {
    name: "Trim",
    signature: "Result\\$ = Trim(String$ [, Character$])",
    documentation:
      "Removes all the specified characters located at the beginning and at the end of a string.",
    category: "String",
    returnType: "",
  },
  {
    name: "UCase",
    signature: "Result\\$ = UCase(String$)",
    documentation:
      "Returns the original string converted into upper case characters.",
    category: "String",
    returnType: "",
  },
  {
    name: "UnescapeString",
    signature: "Result\\$ = UnescapeString(String$ [, Mode])",
    documentation:
      "Returns the unescaped version of the string. EscapeString() can be used to do the reverse operation.",
    category: "String",
    returnType: "",
  },
  {
    name: "ValD",
    signature: "Result.d = ValD(String$)",
    documentation:
      "Converts a string into a double value. The string must be a double in decimal or in scientific (exponent) format. The number parsing stops at the first non numeric character.",
    category: "String",
    returnType: "i",
  },
  {
    name: "ValF",
    signature: "Result.f = ValF(String$)",
    documentation:
      "Converts a string into a float value. The string must be a float in decimal or in scientific (exponent) format. The number parsing stops at the first non numeric character.",
    category: "String",
    returnType: "i",
  },
  {
    name: "Val",
    signature: "Result.q = Val(String$)",
    documentation:
      "Converts a string into a quad numeric value. The string may be an integer in decimal, hexadecimal (with ’$’ prefix) or binary (with ’%’ prefix) format. The number parsing stops at the first non numeric character.",
    category: "String",
    returnType: "i",
  },
  {
    name: "Ascii",
    signature: "*Buffer = Ascii(String$)",
    documentation:
      "Creates an Ascii representation of the string. When the buffer is no longer needed, the buffer needs to be freed with FreeMemory().",
    category: "String",
    returnType: "",
  },
  {
    name: "UTF8",
    signature: "*Buffer = UTF8(String$)",
    documentation:
      "Creates a buffer with an UTF8 representation of the string. When the buffer is no longer needed, the buffer needs to be freed with FreeMemory().",
    category: "String",
    returnType: "",
  },
  {
    name: "FormatNumber",
    signature:
      "Result\\$ = FormatNumber(Number.d [, NbDecimals [, DecimalPoint$ [,",
    documentation: "Format a number into money-like format.",
    category: "String",
    returnType: "",
  },
  // ── SysTray ───────────────────────────────────────
  {
    name: "AddSysTrayIcon",
    signature: "Result = AddSysTrayIcon(#SysTrayIcon, WindowID, ImageID)",
    documentation:
      "Adds an icon in the SysTray area. When an event occurs on any of the SysTray icons the #PB_Event_SysTray event is sent. EventGadget() can be used to know which SysTrayIcon has been used. EventType() functions is also updated by this function.",
    category: "SysTray",
    returnType: "i",
  },
  {
    name: "ChangeSysTrayIcon",
    signature: "ChangeSysTrayIcon(#SysTrayIcon, ImageID)",
    documentation: "Changes the specified icon in the SysTray area.",
    category: "SysTray",
    returnType: "",
  },
  {
    name: "IsSysTrayIcon",
    signature: "Result = IsSysTrayIcon(#SysTrayIcon)",
    documentation:
      "Tests if the given SysTray icon is valid and correctly initialized.",
    category: "SysTray",
    returnType: "i",
  },
  {
    name: "SysTrayIconMenu",
    signature: "SysTrayIconMenu(#SysTrayIcon, MenuID)",
    documentation:
      "Associates the specified popup menu with the SysTray icon. The menu should be created with CreatePopupImageMenu() using the #PB_Menu_SysTrayLook flag. It’s the best way to associate a popup menu with a SysTray icon as it will display the popup menu at the correct position on all",
    category: "SysTray",
    returnType: "",
  },
  {
    name: "SysTrayIconToolTip",
    signature: "SysTrayIconToolTip(#SysTrayIcon, Text$)",
    documentation:
      "Associates the specified Text$ with the SysTray icon. Tool-tip text is the text which is displayed when the mouse cursor hovers over the icon for a period of time (yellow floating box).",
    category: "SysTray",
    returnType: "",
  },
  {
    name: "RemoveSysTrayIcon",
    signature: "RemoveSysTrayIcon(#SysTrayIcon)",
    documentation: "Remove the specified SysTray icon.",
    category: "SysTray",
    returnType: "",
  },
  // ── System ───────────────────────────────────────
  {
    name: "CocoaMessage",
    signature: "Result = CocoaMessage(ReturnValueAddress, Object, Method$ [,",
    documentation:
      "For advanced users. Available on OS X only, it allows to easily send an Objective-C message to the OS X framework and access any API. Usually Objective-C use brackets to have a clear syntax for messages. As PureBasic doesn’t have built-in Objective-C support, it needs to emulate it, so the",
    category: "System",
    returnType: "i",
  },
  {
    name: "CPUName",
    signature: "Result\\$ = CPUName()",
    documentation: "Returns the name of the CPU.",
    category: "System",
    returnType: "",
  },
  {
    name: "Delay",
    signature: "Delay(Time)",
    documentation:
      "Halts the program execution for the specified amount of time.",
    category: "System",
    returnType: "",
  },
  {
    name: "ElapsedMilliseconds",
    signature: "Result.q = ElapsedMilliseconds()",
    documentation:
      "Returns the number of milliseconds that have elapsed since a specific time in the past.",
    category: "System",
    returnType: "i",
  },
  {
    name: "DoubleClickTime",
    signature: "Result = DoubleClickTime()",
    documentation:
      "Returns the system setting for the double-click time. If two mouse clicks happen within this time, they are considered a double-click.",
    category: "System",
    returnType: "i",
  },
  {
    name: "OSVersion",
    signature: "Result = OSVersion()",
    documentation:
      "Returns the version of the operating system on which the program has been launched.",
    category: "System",
    returnType: "i",
  },
  {
    name: "ComputerName",
    signature: "Result\\$ = ComputerName()",
    documentation: "Returns the computer name.",
    category: "System",
    returnType: "",
  },
  {
    name: "UserName",
    signature: "Result\\$ = UserName()",
    documentation: "Returns the currently logged user name.",
    category: "System",
    returnType: "",
  },
  {
    name: "MemoryStatus",
    signature: "Result.q = MemoryStatus(Type)",
    documentation: "Returns the specified memory type information.",
    category: "System",
    returnType: "i",
  },
  {
    name: "CountCPUs",
    signature: "Result = CountCPUs([Type])",
    documentation: "Returns the number of CPU cores available.",
    category: "System",
    returnType: "i",
  },
  // ── Terrain ───────────────────────────────────────
  {
    name: "FreeTerrain",
    signature: "FreeTerrain(#Terrain)",
    documentation:
      "Frees a terrain and releases all its associated memory. This terrain must not be used (by using its number with the other functions in this library) after calling this function, unless you create it again.",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "FreeTerrainBody",
    signature: "FreeTerrainBody(#Terrain)",
    documentation: "Free the body associated with the terrain.",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "SetupTerrains",
    signature: "SetupTerrains(LightID, CompositeMapDistance.f, Flags)",
    documentation:
      "Setup the default parameters for all the future created terrains.",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "CreateTerrain",
    signature:
      "Result = CreateTerrain(#Terrain, Size, WorldSize, Scale, NbLayers,",
    documentation:
      "Creates a new terrain. SetupTerrains() has to be called before to set the default parameter for the new terrain. After the terrain creation, new tiles can be defined with DefineTerrainTile() and textures applied with AddTerrainTexture() . Once the terrain definition is finished, BuildTerrain()",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "CreateTerrainBody",
    signature: "CreateTerrainBody(#Terrain, Restitution, Friction)",
    documentation:
      "Adds a static physic body to the terrain. This enable physic objects to collide with the terrain.",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "DefineTerrainTile",
    signature: "Result = DefineTerrainTile(#Terrain, TileX, TileY, HeightMap$,",
    documentation: "Defines the content of a tile in the terrain grid.",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "AddTerrainTexture",
    signature:
      "AddTerrainTexture(#Terrain, Layer, WorldSize, DiffuseSpecular$,",
    documentation: "Adds a texture to the #Terrain.",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "BuildTerrain",
    signature: "BuildTerrain(#Terrain)",
    documentation:
      "Builds the terrain. Before building a terrain, tiles have to be defined with DefineTerrainTile() , and textures added with AddTerrainTexture() .",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "TerrainLocate",
    signature: "TerrainLocate(#Terrain, x, y, z)",
    documentation: "Changes the terrain absolute location in the world.",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "TerrainHeight",
    signature: "Result = TerrainHeight(#Terrain, x, z)",
    documentation:
      "Gets the terrain height at the specified position in the world.",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "TerrainTileHeightAtPosition",
    signature:
      "Result = TerrainTileHeightAtPosition(#Terrain, TileX, TileY, Layer,",
    documentation:
      "Returns the height of the terrain tile at the specified coordinates.",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "TerrainTilePointX",
    signature: "Result = TerrainTilePointX(#Terrain, TileX, TileY, x, y, z)",
    documentation: "Returns the ’x’ position of the point in the terrain tile.",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "TerrainTilePointY",
    signature: "Result = TerrainTilePointY(#Terrain, TileX, TileY, x, y, z)",
    documentation: "Returns the ’y’ position of the point in the terrain tile.",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "TerrainTileSize",
    signature: "Result = TerrainTileSize(#Terrain, TileX, TileY)",
    documentation: "Returns the size of the terrain tile.",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "GetTerrainTileHeightAtPoint",
    signature:
      "Result = GetTerrainTileHeightAtPoint(#Terrain, TileX, TileY, x, y)",
    documentation:
      "Returns the height of the terrain tile at the specified position.",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "SetTerrainTileHeightAtPoint",
    signature:
      "SetTerrainTileHeightAtPoint(#Terrain, TileX, TileY, x, y, Height)",
    documentation:
      "Sets the height of the terrain tile at the specified position. The change will not be reflected immediately, UpdateTerrain() has to be called once all the modifications are done.",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "UpdateTerrain",
    signature: "UpdateTerrain(#Terrain)",
    documentation:
      "Updates the terrain. This is needs after altering the terrain with commands like SetTerrainTileHeightAtPoint() .",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "TerrainTileLayerMapSize",
    signature: "Result = TerrainTileLayerMapSize(#Terrain, TileX, TileY)",
    documentation: "Returns the terrain tile layer blend map size.",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "GetTerrainTileLayerBlend",
    signature:
      "Result = GetTerrainTileLayerBlend(#Terrain, TileX, TileY, Layer, x,",
    documentation:
      "Returns the terrain tile layer blend value at the specified position.",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "SetTerrainTileLayerBlend",
    signature:
      "SetTerrainTileLayerBlend(#Terrain, TileX, TileY, Layer, x, y, Value)",
    documentation:
      "Changes the terrain tile layer blend value at the specified position. The change will not be reflected immediately, UpdateTerrainTileLayerBlend() has to be called once all the modifications are done.",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "UpdateTerrainTileLayerBlend",
    signature: "UpdateTerrainTileLayerBlend(#Terrain, TileX, TileY, Layer)",
    documentation:
      "Updates the terrain tile blend layer. This is needed after modifying the layer blend value with SetTerrainTileLayerBlend() .",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "TerrainMousePick",
    signature: "Result = TerrainMousePick(#Terrain, CameraID, x, y)",
    documentation:
      "Simulates a mouse click on the terrain under the specified 2D point (x,y - in pixels) on the specified camera.",
    category: "Terrain",
    returnType: "i",
  },
  {
    name: "SaveTerrain",
    signature: "SaveTerrain(#Terrain, ModifiedOnly)",
    documentation:
      "Saves the terrain to disk, using the filename and extension defined with CreateTerrain() .",
    category: "Terrain",
    returnType: "",
  },
  {
    name: "TerrainRenderMode",
    signature: "TerrainRenderMode(#Terrain, Flag)",
    documentation: "Changes the way the terrain is rendered.",
    category: "Terrain",
    returnType: "",
  },
  // ── Text3D ───────────────────────────────────────
  {
    name: "CreateText3D",
    signature:
      "Result = CreateText3D(#Text3D, Caption$ [, Font$, Height, Color])",
    documentation:
      "Creates a new 3D text. To be displayed, the text needs to be attached to a LibraryLink ”node” ”node” or an entity .",
    category: "Text3D",
    returnType: "i",
  },
  {
    name: "FreeText3D",
    signature: "FreeText3D(#Text3D)",
    documentation: "Free the specified text.",
    category: "Text3D",
    returnType: "",
  },
  {
    name: "Text3DID",
    signature: "Text3DID = Text3DID(#Text3D)",
    documentation: "Returns the unique system identifier of the text.",
    category: "Text3D",
    returnType: "i",
  },
  {
    name: "IsText3D",
    signature: "Result = IsText3D(#Text3D)",
    documentation:
      "Tests if the given text number is a valid and correctly initialized text.",
    category: "Text3D",
    returnType: "i",
  },
  {
    name: "MoveText3D",
    signature: "MoveText3D(#Text3D, x, y, z [, Mode])",
    documentation: "Move the specified text.",
    category: "Text3D",
    returnType: "",
  },
  {
    name: "ScaleText3D",
    signature: "ScaleText3D(#Text3D, x, y, z [, Mode])",
    documentation:
      "Scales the text according to the specified x,y,z values. When using #PB_Relative mode, this is a factor based scale which means the text size will be multiplied with the given value to obtain the new size.",
    category: "Text3D",
    returnType: "",
  },
  {
    name: "Text3DCaption",
    signature: "Text3DCaption(#Text3D, Caption$)",
    documentation: "Change the displayed text.",
    category: "Text3D",
    returnType: "",
  },
  {
    name: "Text3DColor",
    signature: "Text3DColor(#Text3D, Color)",
    documentation: "Change displayed text color.",
    category: "Text3D",
    returnType: "",
  },
  {
    name: "Text3DAlignment",
    signature: "Text3DAlignment(#Text3D, Alignment)",
    documentation: "Change displayed text alignment.",
    category: "Text3D",
    returnType: "",
  },
  {
    name: "Text3DX",
    signature: "Result = Text3DX(#Text3D)",
    documentation:
      "Returns the absolute ’x’ position of the text in the world.",
    category: "Text3D",
    returnType: "i",
  },
  {
    name: "Text3DY",
    signature: "Result = Text3DY(#Text3D)",
    documentation:
      "Returns the absolute ’y’ position of the text in the world.",
    category: "Text3D",
    returnType: "i",
  },
  {
    name: "Text3DZ",
    signature: "Result = Text3DZ(#Text3D)",
    documentation:
      "Returns the absolute ’z’ position of the text in the world.",
    category: "Text3D",
    returnType: "i",
  },
  // ── Texture ───────────────────────────────────────
  {
    name: "CopyTexture",
    signature: "Result = CopyTexture(#Texture, #NewTexture)",
    documentation:
      "Creates a new texture which is the exact copy of the specified texture.",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "CreateTexture",
    signature:
      "Result = CreateTexture(#Texture, Width, Height [, TextureName$])",
    documentation: "Creates a new blank texture with the specified dimension.",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "CreateCubicTexture",
    signature: "Result = CreateCubicTexture(#Texture, #Texture1, #Texture2,",
    documentation:
      "Creates a new cubic texture using the specified textures. Cubic textures are useful to create world like reflections. #PB_Material_EnvironmentMap should be specified with SetMaterialAttribute() to enable cubic reflection.",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "CreateRenderTexture",
    signature:
      "Result = CreateRenderTexture(#Texture, CameraID, Width, Height [,",
    documentation:
      "Creates a new render texture. The camera associated to the texture will render its view directly on the texture, without being displayed on screen. This can be very useful to have objects which display a part of the scene (like a TV screen, a mirror etc).",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "UpdateRenderTexture",
    signature: "UpdateRenderTexture(#Texture)",
    documentation:
      "Updates the texture content with the current camera view. If the render texture has been created with the #PB_Texture_AutomaticUpdate flag, this function is not needed.",
    category: "Texture",
    returnType: "",
  },
  {
    name: "SaveRenderTexture",
    signature: "Result = SaveRenderTexture(#Texture, Filename$)",
    documentation:
      "Save the render texture content. It can be useful to do screenshots of a particular scene. The save format can only be PNG.",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "CreateCubeMapTexture",
    signature:
      "Result = CreateCubeMapTexture(#Texture, Width, Height, TextureName$",
    documentation:
      "Creates a new cube map texture. A cube map texture use the surrounding to render itself as reflection on it. This texture has to exist in an OGRE script.",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "EntityCubeMapTexture",
    signature: "Result = EntityCubeMapTexture(#Texture, #Entity)",
    documentation:
      "Applies the cube map texture to the entity . The entity will reflect the world around it.",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "FreeTexture",
    signature: "FreeTexture(#Texture)",
    documentation:
      "Frees the specified texture. All its associated memory is released and this object can’t be used anymore.",
    category: "Texture",
    returnType: "",
  },
  {
    name: "IsTexture",
    signature: "Result = IsTexture(#Texture)",
    documentation:
      "Tests if the given texture is valid and correctly initialized.",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "GetScriptTexture",
    signature: "Result = GetScriptTexture(#Texture, Name$)",
    documentation:
      "Get a texture defined in an OGRE script file. Scripts are loaded and parsed when calling Parse3DScripts() .",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "LoadTexture",
    signature: "Result = LoadTexture(#Texture, Filename$)",
    documentation:
      "Loads a new texture from the disk. Before loading a texture, an archive has to be specified with Add3DArchive() . Texture format can be in PNG, TGA or JPG. It’s strongly recommended to make the texture dimension square and with power of 2 width/height: 64x64, 128x128, 256x256... Old GFX cards",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "TextureID",
    signature: "TextureID = TextureID(#Texture)",
    documentation: "Returns the unique system identifier of the texture.",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "TextureHeight",
    signature: "Height = TextureHeight(#Texture)",
    documentation: "Returns the height of the specified texture.",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "TextureOutput",
    signature: "OutputID = TextureOutput(#Texture)",
    documentation:
      "Returns the OutputID of the image to perform 2D rendering operation on it. Textures created with CreateRenderTexture() are not supported.",
    category: "Texture",
    returnType: "i",
  },
  {
    name: "TextureWidth",
    signature: "Width = TextureWidth(#Texture)",
    documentation: "Returns the width of the specified texture.",
    category: "Texture",
    returnType: "i",
  },
  // ── Thread ───────────────────────────────────────
  {
    name: "IsThread",
    signature: "Result = IsThread(Thread)",
    documentation:
      "Tests if the given thread number is a valid thread created with the CreateThread() function, and if it is still running.",
    category: "Thread",
    returnType: "i",
  },
  {
    name: "ThreadID",
    signature: "ThreadID = ThreadID(Thread)",
    documentation: "Returns the unique system identifier of the thread.",
    category: "Thread",
    returnType: "i",
  },
  {
    name: "CreateMutex",
    signature: "Mutex = CreateMutex()",
    documentation:
      "Creates a new mutex object. The mutex is initially unlocked. The main objective of the mutex functions is thread synchronization. They do not create too much overhead, but they only work within one program, not system-wide. A mutex is an object that can",
    category: "Thread",
    returnType: "i",
  },
  {
    name: "CreateThread",
    signature: "Thread = CreateThread(@ProcedureName(), *Value)",
    documentation:
      "Creates a new thread running in the application background. If the thread is correctly created, it returns the Thread number which is used with the other thread functions, such as KillThread() , PauseThread() , etc. The procedure which you use as a thread must take one parameter and",
    category: "Thread",
    returnType: "i",
  },
  {
    name: "FreeMutex",
    signature: "FreeMutex(Mutex)",
    documentation: "Frees a mutex object and the memory it requires.",
    category: "Thread",
    returnType: "",
  },
  {
    name: "KillThread",
    signature: "KillThread(Thread)",
    documentation:
      "Immediately kills the specified thread, which had previously been created with CreateThread() . This is a very dangerous function, and should only be used rarely. The problem is that the thread is killed immediately and has no chance to perform any cleanup code (for example, freeing",
    category: "Thread",
    returnType: "",
  },
  {
    name: "LockMutex",
    signature: "LockMutex(Mutex)",
    documentation:
      "Waits until the mutex object is available (not locked by another thread) and then locks the object so no other thread can get a lock on the object. After this function returns, it is assured that this thread is the only one with a locked state on the",
    category: "Thread",
    returnType: "",
  },
  {
    name: "PauseThread",
    signature: "PauseThread(Thread)",
    documentation:
      "Pauses the execution of the specified thread, previously created with CreateThread() . The thread can be resumed with ResumeThread() .",
    category: "Thread",
    returnType: "",
  },
  {
    name: "ResumeThread",
    signature: "ResumeThread(Thread)",
    documentation:
      "Resumes execution of the specified thread, previously paused with PauseThread() .",
    category: "Thread",
    returnType: "",
  },
  {
    name: "ThreadPriority",
    signature: "OldPriority = ThreadPriority(Thread, Priority)",
    documentation:
      "Change the priority of the specified thread and returns the old priority. The priority value can go from 1 to 32. 1 is the lowest priority available, 16 is the normal priority and 32 is the time critical priority (highest, please don’t use it unless you know what you’re doing).",
    category: "Thread",
    returnType: "i",
  },
  {
    name: "TryLockMutex",
    signature: "Result = TryLockMutex(Mutex)",
    documentation:
      "Tries to lock the specified mutex. Unlike LockMutex() , this function does not stop execution until the mutex is available. It returns immediately and the return-value indicates if the lock was successful or not. This is useful in situations were the thread should not wait for the mutex to be",
    category: "Thread",
    returnType: "i",
  },
  {
    name: "UnlockMutex",
    signature: "UnlockMutex(Mutex)",
    documentation:
      "Unlocks a mutex previously locked by LockMutex() . The mutex is then available again for other threads to lock it.",
    category: "Thread",
    returnType: "",
  },
  {
    name: "WaitThread",
    signature: "Result = WaitThread(Thread [, Timeout])",
    documentation:
      "Stop the program execution until the specified ’Thread’ exits, or the optional timeout (in milliseconds) is reached. If the thread is already finished, it returns immediately.",
    category: "Thread",
    returnType: "i",
  },
  {
    name: "CreateSemaphore",
    signature: "Semaphore = CreateSemaphore([InitialCount])",
    documentation:
      "Creates a new semaphore object. A semaphore is a thread synchronization object that keeps an internal count. It has two kinds of operations: signal and wait . A wait operation decreases the count of the semaphore by one. If the",
    category: "Thread",
    returnType: "i",
  },
  {
    name: "FreeSemaphore",
    signature: "FreeSemaphore(Semaphore)",
    documentation:
      "Destroys the given Semaphore object and frees all resources used by it.",
    category: "Thread",
    returnType: "",
  },
  {
    name: "SignalSemaphore",
    signature: "SignalSemaphore(Semaphore)",
    documentation:
      "Increases the internal count of the semaphore by one, releasing a waiting thread if there is one.",
    category: "Thread",
    returnType: "",
  },
  {
    name: "WaitSemaphore",
    signature: "WaitSemaphore(Semaphore)",
    documentation:
      "Decreases the internal count of the semaphore by one, blocking thread execution if the count would fall below zero. A blocked thread is resumed as soon as another thread calls SignalSemaphore() .",
    category: "Thread",
    returnType: "",
  },
  {
    name: "TrySemaphore",
    signature: "Result = TrySemaphore(Semaphore)",
    documentation:
      "Decreases the internal count of the semaphore by one only if the count is above 0. This is the same as a WaitSemaphore() operation, but without blocking if the count would fall below 0.",
    category: "Thread",
    returnType: "i",
  },
  // ── ToolBar ───────────────────────────────────────
  {
    name: "CreateToolBar",
    signature: "Result = CreateToolBar(#ToolBar, WindowID [, Flags])",
    documentation: "Creates a new empty toolbar on the given window.",
    category: "ToolBar",
    returnType: "i",
  },
  {
    name: "FreeToolBar",
    signature: "FreeToolBar(#ToolBar)",
    documentation: "Free the specified #Toolbar.",
    category: "ToolBar",
    returnType: "",
  },
  {
    name: "DisableToolBarButton",
    signature: "DisableToolBarButton(#ToolBar, Button, State)",
    documentation: "Disable (or enable) a toolbar button in the given toolbar.",
    category: "ToolBar",
    returnType: "",
  },
  {
    name: "GetToolBarButtonState",
    signature: "State = GetToolBarButtonState(#ToolBar, Button)",
    documentation:
      "Get the state of the specified toolbar button. The button has to be created using the #PB_ToolBar_Toggle mode.",
    category: "ToolBar",
    returnType: "i",
  },
  {
    name: "IsToolBar",
    signature: "Result = IsToolBar(#ToolBar)",
    documentation:
      "Tests if the given #ToolBar number is a valid and correctly initialized, toolbar.",
    category: "ToolBar",
    returnType: "i",
  },
  {
    name: "SetToolBarButtonState",
    signature: "SetToolBarButtonState(#ToolBar, Button, State)",
    documentation:
      "Set the state of the specified toolbar button. The button has to be created using the #PB_ToolBar_Toggle mode.",
    category: "ToolBar",
    returnType: "",
  },
  {
    name: "ToolBarHeight",
    signature: "Result = ToolBarHeight(#ToolBar)",
    documentation:
      "Returns the height (in pixels) of the toolbar. This is useful for correct calculation on window height when using a toolbar.",
    category: "ToolBar",
    returnType: "i",
  },
  {
    name: "ToolBarImageButton",
    signature: "ToolBarImageButton(#Button, ImageID [, Mode [, Text$]])",
    documentation:
      "Add an image button to the toolbar being constructed. CreateToolBar() must be called before to use this function.",
    category: "ToolBar",
    returnType: "",
  },
  {
    name: "ToolBarSeparator",
    signature: "ToolBarSeparator()",
    documentation:
      "Add a vertical separator to toolbar being constructed. CreateToolBar() must be called before to use this function.",
    category: "ToolBar",
    returnType: "",
  },
  {
    name: "ToolBarButtonText",
    signature: "ToolBarButtonText(#ToolBar, Button, Text$)",
    documentation:
      "Change the text for the specified #ToolBar button. The toolbar had to be created with the #PB_ToolBar_Text flag.",
    category: "ToolBar",
    returnType: "",
  },
  {
    name: "ToolBarToolTip",
    signature: "ToolBarToolTip(#ToolBar, Button, Text$)",
    documentation:
      "Associates the specified text to the #ToolBar button. A tool-tip text is a text which is displayed when the mouse cursor is over the button for a few time (usually a small yellow floating box).",
    category: "ToolBar",
    returnType: "",
  },
  {
    name: "ToolBarID",
    signature: "ToolBarID = ToolBarID(#ToolBar)",
    documentation: "Returns the unique system identifier of the given toolbar.",
    category: "ToolBar",
    returnType: "i",
  },
  // ── VectorDrawing ───────────────────────────────────────
  {
    name: "StartVectorDrawing",
    signature: "Result = StartVectorDrawing(Output)",
    documentation:
      "Prepares the vector drawing library to draw to the specified output.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "StopVectorDrawing",
    signature: "StopVectorDrawing()",
    documentation:
      "Finishes a sequence of drawing operations and frees all resources allocated by it.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "VectorOutputWidth",
    signature: "Result.d = VectorOutputWidth()",
    documentation: "Returns the width of the vector drawing output area.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "VectorOutputHeight",
    signature: "Result.d = VectorOutputHeight()",
    documentation: "Returns the height of the vector drawing output area.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "VectorResolutionX",
    signature: "Result.d = VectorResolutionX()",
    documentation:
      "Returns the horizontal resolution of the vector drawing output area.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "VectorResolutionY",
    signature: "Result.d = VectorResolutionY()",
    documentation:
      "Returns the vertical resolution of the vector drawing output area.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "VectorUnit",
    signature: "Result = VectorUnit()",
    documentation:
      "Returns the unit in which all coordinates and sizes are measured on the current vector drawing output. This unit has been specified when the output was created.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "SaveVectorState",
    signature: "SaveVectorState()",
    documentation:
      "Saves the current vector drawing state to be restored later. Multiple states can be saved on a stack and restored in the reverse order they were saved. The following information is saved with this command: - The coordinate transformations",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "RestoreVectorState",
    signature: "RestoreVectorState()",
    documentation:
      "Restores the vector drawing state that was stored in the corresponding call to SaveVectorState() .",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "BeginVectorLayer",
    signature: "BeginVectorLayer([Alpha])",
    documentation:
      "Begins a new empty layer on top of the current vector drawing output. All future drawing operations will be performed on this layer until EndVectorLayer() is called. This command also saves the current drawing state in the same way as SaveVectorState() . Multiple layers can be",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "EndVectorLayer",
    signature: "EndVectorLayer()",
    documentation:
      "Finishes drawing on a temporary layer created by BeginVectorLayer() . The contents of the layer are drawn to the next lower layer using the alpha transparency of the temporary layer. This command also restores the drawing state that was in effect when BeginVectorLayer() was called.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "NewVectorPage",
    signature: "NewVectorPage()",
    documentation:
      "Finishes the current page on the vector drawing output and starts a fresh page. The following outputs support multiple pages: PrinterVectorOutput() PdfVectorOutput()",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "FillVectorOutput",
    signature: "FillVectorOutput()",
    documentation:
      "Fills the entire drawing area (except areas outside the clipping path) with the current drawing source. This operation is equivalent to constructing a path that covers the entire drawing area and calling FillPath() on it.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "ResetCoordinates",
    signature: "ResetCoordinates([System])",
    documentation:
      "Reset any coordinate transformations that were applied to the current vector drawing output and restore the coordinate system that was in effect when StartVectorDrawing() was called.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "TranslateCoordinates",
    signature: "TranslateCoordinates(x.d, y.d [, System])",
    documentation:
      "Move the origin of the vector drawing coordinate system. The move will be applied along the x/y axis of the current coordinate system. All future drawing operations will be relative to the new origin.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "ScaleCoordinates",
    signature: "ScaleCoordinates(ScaleX.d, ScaleY.d [, System])",
    documentation:
      "Scale the vector drawing coordinate system by stretching it in the x/y direction.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "RotateCoordinates",
    signature: "RotateCoordinates(x.d, y.d, Angle.d [, System])",
    documentation:
      "Rotate the vector drawing coordinate system around the given center point. The center point is expressed in terms of the current coordinate system.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "SkewCoordinates",
    signature: "SkewCoordinates(AngleX.d, AngleY.d [, System])",
    documentation:
      "Apply a shearing angle in the x and/or y direction to the vector drawing coordinate system.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "FlipCoordinatesX",
    signature: "FlipCoordinatesX(AxisX.d [, System])",
    documentation:
      "Mirrors the vector drawing coordinate system at the specified X axis.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "FlipCoordinatesY",
    signature: "FlipCoordinatesY(AxisY.d [, System])",
    documentation:
      "Mirrors the vector drawing coordinate system at the specified Y axis.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "ConvertCoordinateX",
    signature: "Result.d = ConvertCoordinateX(x.d, y.d [, Source, Target])",
    documentation:
      "Convert a point from one coordinate system to another in the vector drawing output. This function returns the X coordinate of the conversion. The Y coordinate can be retrieved with the ConvertCoordinateY() function.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "ConvertCoordinateY",
    signature: "Result.d = ConvertCoordinateY(x.d, y.d [, Source, Target])",
    documentation:
      "Convert a point from one coordinate system to another in the vector drawing output. This function returns the Y coordinate of the conversion. The X coordinate can be retrieved with the ConvertCoordinateX() function.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "ResetPath",
    signature: "ResetPath()",
    documentation:
      "Resets the vector drawing path to an empty path and moves to cursor to position (0, 0).",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "ClosePath",
    signature: "ClosePath()",
    documentation:
      "Closes the current figure in the vector drawing path by adding a straight line to the starting point of the figure. The starting point is the location of the last MovePathCursor() call. When a path is filled , only closed figures are taken into account.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "MovePathCursor",
    signature: "MovePathCursor(x.d, y.d [, Flags])",
    documentation:
      "Moves the cursor of the vector drawing path to a new location. This also starts a new figure within the path, which means that a call to ClosePath() will draw a line back to this location.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "AddPathLine",
    signature: "AddPathLine(x.d, y.d [, Flags])",
    documentation:
      "Adds a straight line to the vector drawing path. The line starts at the current cursor position and ends at the given coordinates.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "AddPathArc",
    signature: "AddPathArc(x1.d, y1.d, x2.d, y2.d, Radius.d, [, Flags])",
    documentation:
      "Adds a straight line towards (x1, y2) followed by an arc in the direction of (x2, y2) to the vector drawing path. This function can be used to create paths with rounded corners. The new cursor position will be the endpoint of the arc.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "AddPathCurve",
    signature: "AddPathCurve(x1.d, y1.d, x2.d, y2.d, x3.d, y3.d [, Flags])",
    documentation:
      "Adds a cubic bezier curve to the vector drawing path. The curve starts at the current path position and ends at (x3, y3). The other two points determine the shape of the curve.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "AddPathBox",
    signature: "AddPathBox(x.d, y.d, Width.d, Height.d [, Flags])",
    documentation:
      "Add a box to the vector drawing path. This is a convenience function that combines the needed AddPathLine() calls to create a simple box shape. By default, this function ends the current figure in the path and adds the box as an unconnected",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "AddPathCircle",
    signature:
      "AddPathCircle(x.d, y.d, Radius.d [, StartAngle.d, EndAngle.d [,",
    documentation:
      "Add a circle (or a partial circle) to the vector drawing path. By default, this function ends the current figure in the path and adds the circle as an unconnected figure to the path (full circles are marked as closed). This behavior can be changed with the",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "AddPathEllipse",
    signature: "AddPathEllipse(x.d, y.d, RadiusX.d, RadiusY.d [, StartAngle.d,",
    documentation:
      "Add an ellipse (or a partial ellipse) to the vector drawing path. By default, this function ends the current figure in the path and adds the ellipse as an unconnected figure to the path (full ellipses are marked as closed). This behavior can be changed with the",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "AddPathText",
    signature: "AddPathText(Text$)",
    documentation:
      "Add the outline of the characters in the given text to the current cursor position in the vector drawing path. The current position can be set with MovePathCursor() . After the call to this function the cursor is moved to the end of the added text.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "AddPathSegments",
    signature: "AddPathSegments(Segments$ [, Flags])",
    documentation:
      "Add multiple segments described in string format to the vector drawing path. This command can be used to reproduce the path commands recorded with the PathSegments() command.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "IsInsidePath",
    signature: "Result = IsInsidePath(x.d, y.d [, CoordinateSystem])",
    documentation:
      "Tests if the given coordinates are within a closed figure in the current vector drawing path. That is, this function returns non-zero if the given point would be filled by a call to FillPath() .",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "IsInsideStroke",
    signature: "Result = IsInsideStroke(x.d, y.d, Width.d [, Flags [,",
    documentation:
      "Tests if the given coordinates are within an area that will be drawn to by a call to StrokePath() .",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "IsPathEmpty",
    signature: "Result = IsPathEmpty()",
    documentation: "Tests if the current vector drawing path is empty.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "StrokePath",
    signature: "StrokePath(Width.d [, Flags])",
    documentation:
      "Stroke the current drawing path with the current drawing source. This draws the path as a solid line. By default, the path is reset after calling this function. This can be prevented with the appropriate flags.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "DotPath",
    signature: "DotPath(Width.d, Distance.d [, Flags [, StartOffset.d]])",
    documentation:
      "Draw the current drawing path as a line of dots. By default, the path is reset after calling this function. This can be prevented with the appropriate flags.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "DashPath",
    signature: "DashPath(Width.d, Length.d [, Flags [, StartOffset.d]])",
    documentation:
      "Draw the current drawing path as a series of dashes of equal length and distance. By default, the path is reset after calling this function. This can be prevented with the appropriate flags.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "CustomDashPath",
    signature: "CustomDashPath(Width.d, Array.d() [, Flags [, StartOffset.d]])",
    documentation:
      "Draw the current drawing path with a custom dashing pattern. By default, the path is reset after calling this function. This can be prevented with the appropriate flags.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "FillPath",
    signature: "FillPath([Flags])",
    documentation:
      "Fill all closed figures in the current vector drawing path with color from the drawing source. By default, the path is reset after calling this function. This can be prevented with the appropriate flags.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "ClipPath",
    signature: "ClipPath([Flags])",
    documentation:
      "Clip the vector drawing output to the area defined by the current vector drawing path. Future drawing operations will only affect areas within the current path. The clipping will be combined with any clipping that previously existed on the drawing output.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "PathCursorX",
    signature: "Result.d = PathCursorX()",
    documentation:
      "Returns the current X coordinate of the vector drawing cursor. This is the location where new path segments will be added or text will be drawn.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PathCursorY",
    signature: "Result.d = PathCursorY()",
    documentation:
      "Returns the current Y coordinate of the vector drawing cursor. This is the location where new path segments will be added or text will be drawn.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PathPointX",
    signature: "Result.d = PathPointX(Distance.d)",
    documentation:
      "Returns the X coordinate of the point at the given distance from the start of the current vector drawing path.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PathPointY",
    signature: "Result.d = PathPointY(Distance.d)",
    documentation:
      "Returns the Y coordinate of the point at the given distance from the start of the current vector drawing path.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PathPointAngle",
    signature: "Result.d = PathPointAngle(Distance.d)",
    documentation:
      "Returns the angle of the path at the point at the given distance from the start of the current vector drawing path.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PathLength",
    signature: "Result.d = PathLength()",
    documentation:
      "Returns the total length of the current vector drawing path.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PathBoundsX",
    signature: "Result.d = PathBoundsX()",
    documentation:
      "Returns the X coordinate (top/left corner) of the bounding box for the current vector drawing path. The result is the lowest X coordinate that stroking/filling the current path would reach.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PathBoundsY",
    signature: "Result.d = PathBoundsY()",
    documentation:
      "Returns the Y coordinate (top/left corner) of the bounding box for the current vector drawing path. The result is the lowest Y coordinate that stroking/filling the current path would reach.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PathBoundsWidth",
    signature: "Result.d = PathBoundsWidth()",
    documentation:
      "Returns the width of the bounding box for the current vector drawing path. The result is the difference between the lowest & highest X coordinate that stroking/filling the current path would reach.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PathBoundsHeight",
    signature: "Result.d = PathBoundsHeight()",
    documentation:
      "Returns the height of the bounding box for the current vector drawing path. The result is the difference between the lowest & highest Y coordinate that stroking/filling the current path would reach.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PathSegments",
    signature: "Result\\$ = PathSegments()",
    documentation:
      "Returns a string description of the current vector drawing path. The result can be used to examine the current path or in the AddPathSegments() command to reproduce the same path later.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "VectorSourceColor",
    signature: "VectorSourceColor(Color)",
    documentation:
      "Selects a single color as the source for vector drawing operations such as FillPath() , StrokePath() and others.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "VectorSourceLinearGradient",
    signature: "VectorSourceLinearGradient(x1.d, y1.d, x2.d, y2.d)",
    documentation:
      "Selects a linear color gradient as the source for vector drawing operations such as FillPath() or StrokePath() . Initially, the gradient is solid black. Color stops have to be added with the VectorSourceGradientColor() after this function.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "VectorSourceCircularGradient",
    signature: "VectorSourceCircularGradient(x.d, y.d, Radius.d, [CenterX.d,",
    documentation:
      "Selects a circular gradient as the source for vector drawing operations such as FillPath() or StrokePath() . Initially, the gradient is solid black. Color stops have to be added with the VectorSourceGradientColor() after this function.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "VectorSourceGradientColor",
    signature: "VectorSourceGradientColor(Color, Position.d)",
    documentation:
      "Add a new color stop (a defined color position) to the gradient defined by VectorSourceLinearGradient() or VectorSourceCircularGradient() . A gradient must at least have a color at position 0.0 and 1.0. If no colors are added for these",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "VectorSourceImage",
    signature:
      "VectorSourceImage(ImageID [, Alpha [, Width.d, Height.d [, Flags]]])",
    documentation:
      "Selects an image as the source for vector drawing operations such as FillPath() or StrokePath() . These functions will apply pixels from the specified image to the drawing output wherever they draw something.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "DrawVectorImage",
    signature: "DrawVectorImage(ImageID [, Alpha [, Width.d, Height.d]])",
    documentation:
      "Draw the specified image directly to the vector drawing output. The image will be drawn at the location of the path cursor . The cursor will be moved to the location of the bottom/right corner of the image after the image is drawn.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "DrawVectorText",
    signature: "DrawVectorText(Text$)",
    documentation:
      "Draw the given text at the current location of the path cursor . The cursor will be moved horizontally to the end of the drawn text. The font to use can be set with VectorFont() .",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "DrawVectorParagraph",
    signature: "DrawVectorParagraph(Text$, Width.d, Height.d [, Flags])",
    documentation:
      "Draw a paragraph of text (multiple lines) within a given bounding box with automatic layout for linebreaks. If the text does not fit the defined box, it will be cut at the end. The font to use can be set with VectorFont() .",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "VectorFont",
    signature: "VectorFont(FontID [, Size.d])",
    documentation:
      "Specifies the font to use for vector drawing. Only vector fonts are allowed, like TrueType, bitmap fonts are not allowed.",
    category: "VectorDrawing",
    returnType: "",
  },
  {
    name: "VectorTextWidth",
    signature: "Result.d = VectorTextWidth(Text$ [, Flags])",
    documentation:
      "Measures the width of the given text in the current vector drawing font.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "VectorTextHeight",
    signature: "Result.d = VectorTextHeight(Text$ [, Flags])",
    documentation:
      "Measures the height of the given text in the current vector drawing font.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "VectorParagraphHeight",
    signature: "Result.d = VectorParagraphHeight(Text$, Width.d, Height.d)",
    documentation:
      "Returns the height needed to draw the given paragraph of text using the DrawVectorParagraph() function.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "PdfVectorOutput",
    signature:
      "Result = PdfVectorOutput(Filename$, Width.d, Height.d [, Unit])",
    documentation:
      "Creates a PDF file and returns the OutputID to perform vector drawing operations. The actual drawing operations must be enclosed in a StartVectorDrawing() / StopVectorDrawing() block. The PDF file can have multiple pages using the NewVectorPage() command.",
    category: "VectorDrawing",
    returnType: "i",
  },
  {
    name: "SvgVectorOutput",
    signature:
      "Result = SvgVectorOutput(Filename$, Width.d, Height.d [, Unit])",
    documentation:
      "Creates an SVG (scalable vector graphics) file and returns the OutputID to perform vector drawing operations. The actual drawing operations must be enclosed in a StartVectorDrawing() / StopVectorDrawing() block. The SVG file can have multiple pages using the NewVectorPage()",
    category: "VectorDrawing",
    returnType: "i",
  },
  // ── Vehicle ───────────────────────────────────────
  {
    name: "AddVehicleWheel",
    signature: "AddVehicleWheel(#Entity, #WheelEntity, ConnectX.f, ConnectY.f,",
    documentation:
      "Add a new wheel to a vehicle previous created with CreateVehicle() .",
    category: "Vehicle",
    returnType: "",
  },
  {
    name: "ApplyVehicleForce",
    signature: "ApplyVehicleForce(#Entity, Wheel, Force.f)",
    documentation:
      "Apply the specified traction force to the vehicle wheel. The new traction force value replace any previous force previously applied to the vehicle wheel.",
    category: "Vehicle",
    returnType: "",
  },
  {
    name: "ApplyVehicleBrake",
    signature: "ApplyVehicleBrake(#Entity, Wheel, Brake.f)",
    documentation:
      "Apply the specified brake force to the vehicle wheel. The new brake force value replace any previous force previously applied to the vehicle wheel.",
    category: "Vehicle",
    returnType: "",
  },
  {
    name: "ApplyVehicleSteering",
    signature: "ApplyVehicleSteering(#Entity, Wheel, Steering.f)",
    documentation:
      "Apply the specified steering force to the vehicle wheel. The new steering force value replace any previous force previously applied to the vehicle wheel.",
    category: "Vehicle",
    returnType: "",
  },
  {
    name: "CreateVehicle",
    signature: "Result = CreateVehicle(#Entity)",
    documentation: "Creates a new vehicle #Entity.",
    category: "Vehicle",
    returnType: "i",
  },
  {
    name: "CreateVehicleBody",
    signature:
      "CreateVehicleBody(#Entity, Mass.f, Restitution.f, Friction.f [,",
    documentation:
      "Creates a physic body associated with the vehicle #Entity. To have its collisions managed by the physic engine, an entity has to set a body. In fact, only the body is known by the physic engine, which will do all the calculation about the entity, check the",
    category: "Vehicle",
    returnType: "",
  },
  {
    name: "GetVehicleAttribute",
    signature: "Result.f = GetVehicleAttribute(#Entity, Attribute, Wheel)",
    documentation: "Get the specified attribute of the given vehicle entity.",
    category: "Vehicle",
    returnType: "i",
  },
  {
    name: "SetVehicleAttribute",
    signature: "SetVehicleAttribute(#Entity, Attribute, Value.f [, Wheel])",
    documentation:
      "Set the specified attribute value to the given vehicle entity. For more info about attributes possible value, .",
    category: "Vehicle",
    returnType: "",
  },
  // ── VertexAnimation ───────────────────────────────────────
  {
    name: "CreateVertexAnimation",
    signature: "Result = CreateVertexAnimation(#Mesh, Animation$, Length)",
    documentation: "Creates a new vertex animation on the specified mesh.",
    category: "VertexAnimation",
    returnType: "i",
  },
  {
    name: "CreateVertexTrack",
    signature: "Result = CreateVertexTrack(#Mesh, Animation$, Index)",
    documentation:
      "Creates a new vertex animation track on the specified mesh. The animation should already be created with CreateVertexAnimation() , or be predefined in the mesh. Every track has the same length, as defined in CreateVertexAnimation() .",
    category: "VertexAnimation",
    returnType: "i",
  },
  {
    name: "CreateVertexPoseKeyFrame",
    signature:
      "Result = CreateVertexPoseKeyFrame(#Mesh, Animation$, Track, Time)",
    documentation:
      "Creates a new keyframe in the vertex animation. The animation should already be created with CreateVertexAnimation() , or be predefined in the mesh.",
    category: "VertexAnimation",
    returnType: "i",
  },
  {
    name: "AddVertexPoseReference",
    signature: "AddVertexPoseReference(#Mesh, Animation$, Track, Keyframe,",
    documentation:
      "Adds a new pose reference to the animation. The animation should already be created with CreateVertexAnimation() .",
    category: "VertexAnimation",
    returnType: "",
  },
  {
    name: "UpdateVertexPoseReference",
    signature: "UpdateVertexPoseReference(#Mesh, Animation$, Track, Keyframe,",
    documentation:
      "Updates a new pose reference to the animation. The animation should already be created with CreateVertexAnimation() , or be predefined in the mesh.",
    category: "VertexAnimation",
    returnType: "",
  },
  {
    name: "VertexPoseReferenceCount",
    signature: "Result = VertexPoseReferenceCount(#Mesh, Animation$, Track,",
    documentation:
      "Returns the number of pose references in the specified keyframe. The animation should already be created with CreateVertexAnimation() .",
    category: "VertexAnimation",
    returnType: "i",
  },
  {
    name: "MeshPoseCount",
    signature: "Result = MeshPoseCount(#Mesh)",
    documentation:
      "Returns the number of pose’s in the mesh. A pose is a predefined vertex animation in the mesh.",
    category: "VertexAnimation",
    returnType: "i",
  },
  {
    name: "MeshPoseName",
    signature: "Result\\$ = MeshPoseName(#Mesh, PoseIndex)",
    documentation:
      "Returns the pose name in the mesh. A pose is a predefined vertex animation in the mesh.",
    category: "VertexAnimation",
    returnType: "",
  },
  // ── WebView ───────────────────────────────────────
  {
    name: "WebViewGadget",
    signature: "Result = WebViewGadget(#Gadget, x, y, Width, Height [, Flags])",
    documentation:
      "Creates a new web view gadget in the current GadgetList. If needed a proxy can be set with WebViewProxy() .",
    category: "WebView",
    returnType: "i",
  },
  {
    name: "BindWebViewCallback",
    signature: "BindWebViewCallback(#Gadget, JavaScriptFunction$, @Callback())",
    documentation:
      "Bind a PureBasic callback to a new JavaScript function. The JavaScript function will be automatically created in the web view and will be available in the JavaScript code. When the JavaScript function will be called in the webview gadget, the PureBasic ’Callback’ will be called.",
    category: "WebView",
    returnType: "",
  },
  {
    name: "UnbindWebViewCallback",
    signature: "UnbindWebViewCallback(#Gadget, JavaScriptFunction$)",
    documentation:
      "Unbind a JavaScript function previously bound with BindWebViewCallback() . The JavaScript function will be automatically removed from the web view and won’t be be available anymore in the JavaScript code.",
    category: "WebView",
    returnType: "",
  },
  {
    name: "WebViewExecuteScript",
    signature: "WebViewExecuteScript(#Gadget, JavaScript$)",
    documentation:
      "Executes a JavaScript expression asynchronuously in the web view.",
    category: "WebView",
    returnType: "",
  },
  {
    name: "WebViewProxy",
    signature: "WebViewProxy(URL$, Port [Username$, Password$])",
    documentation:
      "Setup a proxy for all the future WebViewGadget() created. This means than all the external link and URL will goes trough this proxy before reaching the destination. It can be useful in a company environment where security level is high.",
    category: "WebView",
    returnType: "",
  },
  // ── Window ───────────────────────────────────────
  {
    name: "AddKeyboardShortcut",
    signature: "AddKeyboardShortcut(#Window, Shortcut, Event)",
    documentation:
      "Add or replace a keyboard shortcut to the specified window. A shortcut generates a menu event (like a menu item) as most of them are used in conjunction with menus.",
    category: "Window",
    returnType: "",
  },
  {
    name: "AddWindowTimer",
    signature: "AddWindowTimer(#Window, Timer, Timeout)",
    documentation:
      "Adds a new timer to the specified window. This will cause #PB_Event_Timer events to be received periodically in the WindowEvent() or WaitWindowEvent() functions. The RemoveWindowTimer() function can be used to remove the timer again.",
    category: "Window",
    returnType: "",
  },
  {
    name: "RemoveWindowTimer",
    signature: "RemoveWindowTimer(#Window, Timer)",
    documentation: "Removes the timer from the specified window.",
    category: "Window",
    returnType: "",
  },
  {
    name: "EventTimer",
    signature: "Timer = EventTimer()",
    documentation:
      "After an event of type #PB_Event_Timer (returned by WindowEvent() or WaitWindowEvent() ), use this function to determine which timer caused the event.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "CloseWindow",
    signature: "CloseWindow(#Window)",
    documentation: "Close the specified window.",
    category: "Window",
    returnType: "",
  },
  {
    name: "DisableWindow",
    signature: "DisableWindow(#Window, State)",
    documentation: "Enables or disables user input to the specified Window.",
    category: "Window",
    returnType: "",
  },
  {
    name: "Event",
    signature: "Event = Event()",
    documentation:
      "Return the current event. It is the same value returned by WindowEvent() and WaitWindowEvent() , it is mainly useful when using a callback to determine which event triggered it.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "EventGadget",
    signature: "GadgetNumber = EventGadget()",
    documentation:
      "After an event of type #PB_Event_Gadget (returned by WindowEvent() or WaitWindowEvent() ), use this function to determine which gadget has been triggered.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "EventMenu",
    signature: "MenuItem = EventMenu()",
    documentation:
      "After an event of type #PB_Event_Menu (returned by WindowEvent() or WaitWindowEvent() ), use this function to determine which menu item, toolbar item or keyboard shortcut has been selected.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "EventData",
    signature: "Data = EventData()",
    documentation:
      "Get the data associated with the current event. The event needs to be a custom event sent with PostEvent() .",
    category: "Window",
    returnType: "i",
  },
  {
    name: "EventType",
    signature: "EventType = EventType()",
    documentation:
      "After a WindowEvent() or WaitWindowEvent() function, use this function to determine of which type the event is. The following gadgets support EventType(): - CanvasGadget() - The CanvasGadget has a special set of event types.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "EventWindow",
    signature: "WindowNumber = EventWindow()",
    documentation:
      "After a WindowEvent() or WaitWindowEvent() function, use this function to determine on which window the event has occurred.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "GetActiveWindow",
    signature: "WindowNumber = GetActiveWindow()",
    documentation:
      "Returns the number of the window which currently has the keyboard focus or -1 if no window within the program is active.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "GetWindowColor",
    signature: "Color = GetWindowColor(#Window)",
    documentation:
      "Returns the background color of the specified window that was set with SetWindowColor() .",
    category: "Window",
    returnType: "i",
  },
  {
    name: "GetWindowData",
    signature: "Result = GetWindowData(#Window)",
    documentation:
      "Returns the ’Data’ value that has been stored for this window with the SetWindowData() function. This allows to associate a custom value with any window.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "GetWindowState",
    signature: "State = GetWindowState(#Window)",
    documentation:
      "Checks whether the specified window is maximized, minimized or displayed normally.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "GetWindowTitle",
    signature: "Result\\$ = GetWindowTitle(#Window)",
    documentation:
      "Returns the text currently displayed in the specified window’s title bar.",
    category: "Window",
    returnType: "",
  },
  {
    name: "HideWindow",
    signature: "HideWindow(#Window, State [, Flags])",
    documentation: "Hides or shows the specified window.",
    category: "Window",
    returnType: "",
  },
  {
    name: "IsWindow",
    signature: "Result = IsWindow(#Window)",
    documentation:
      "Tests if the given #Window number is a valid and correctly initialized, window.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "OpenWindow",
    signature:
      "Result = OpenWindow(#Window, x, y, InnerWidth, InnerHeight, Title$",
    documentation:
      "Opens a new window according to the specified parameters. The new window becomes the active window, it’s not needed to use SetActiveWindow() (unless the window is created as invisible).",
    category: "Window",
    returnType: "i",
  },
  {
    name: "PostEvent",
    signature: "Result = PostEvent(Event [, Window, Object [, Type [, Data]]])",
    documentation:
      "Posts an event at the end of the internal event queue and continues program execution without waiting for message processing.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "RemoveKeyboardShortcut",
    signature: "RemoveKeyboardShortcut(#Window, Shortcut)",
    documentation:
      "Removes a keyboard shortcut previously defined with AddKeyboardShortcut() from the specified #Window.",
    category: "Window",
    returnType: "",
  },
  {
    name: "ResizeWindow",
    signature: "ResizeWindow(#Window, x, y, Width, Height)",
    documentation:
      "Move and resize the given window to the given position and size. If any of the parameters should be ignored (not be changed) #PB_Ignore can be passed at this place.",
    category: "Window",
    returnType: "",
  },
  {
    name: "SetActiveWindow",
    signature: "SetActiveWindow(#Window)",
    documentation:
      "Activates the specified window, which means the focus has been put on this window.",
    category: "Window",
    returnType: "",
  },
  {
    name: "SetWindowCallback",
    signature: "SetWindowCallback(@ProcedureName() [, #Window [, Mode]])",
    documentation:
      "For experienced programmers only. It’s only supported on Microsoft Windows. Normal events should be handled with the regular WaitWindowEvent() or WindowEvent() . This function associates a callback to handle the events of the all open windows. All the events are",
    category: "Window",
    returnType: "",
  },
  {
    name: "SetWindowColor",
    signature: "SetWindowColor(#Window, Color)",
    documentation: "Changes the background color of the specified window.",
    category: "Window",
    returnType: "",
  },
  {
    name: "SetWindowData",
    signature: "SetWindowData(#Window, Value)",
    documentation:
      "Stores the given value with the specified window. This value can later be read with the GetWindowData() function. This allows to associate a custom value with any window.",
    category: "Window",
    returnType: "",
  },
  {
    name: "SetWindowState",
    signature: "SetWindowState(#Window, State)",
    documentation: "Changes the minimized/maximized of the specified window.",
    category: "Window",
    returnType: "",
  },
  {
    name: "SetWindowTitle",
    signature: "SetWindowTitle(#Window, Title$)",
    documentation:
      "Changes the text which is currently displayed in the window title bar.",
    category: "Window",
    returnType: "",
  },
  {
    name: "SmartWindowRefresh",
    signature: "SmartWindowRefresh(#Window, State)",
    documentation:
      "Enables a smart way to refresh the window to reduce the flickering when resizing the window. If the window isn’t resizable, the function isn’t needed. This function just try to help with the flickering problems, but it won’t always give good results. The only way to see if it will work for a",
    category: "Window",
    returnType: "",
  },
  {
    name: "StickyWindow",
    signature: "StickyWindow(#Window, State)",
    documentation:
      "Makes the specified window stay on top of all other open windows (also from other programs), even if it does not have the focus.",
    category: "Window",
    returnType: "",
  },
  {
    name: "WindowEvent",
    signature: "Event = WindowEvent()",
    documentation:
      "Checks if an event has occurred on any of the opened windows.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "WaitWindowEvent",
    signature: "Event = WaitWindowEvent([Timeout])",
    documentation:
      "Wait until an event occurs. It’s the same function as WindowEvent() but locks the program execution, which is very important in a multitasking environment.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "BindEvent",
    signature:
      "BindEvent(Event, @Callback() [, Window [, Object [, EventType]]])",
    documentation:
      "Bind an event to a callback. It’s an additional way to handle events in PureBasic, which works without problem with the regulars WindowEvent() / WaitWindowEvent() commands. It also allows to have real-time event notifications as the callback can be invoked as soon as the event",
    category: "Window",
    returnType: "",
  },
  {
    name: "UnbindEvent",
    signature:
      "UnbindEvent(Event, @Callback() [, Window [, Object [, EventType]]])",
    documentation:
      "Unbind an event from a callback. If no matching event callback is found, this command has no effect.",
    category: "Window",
    returnType: "",
  },
  {
    name: "WindowBounds",
    signature:
      "WindowBounds(#Window, MinimumWidth, MinimumHeight, MaximumWidth,",
    documentation:
      "Changes the minimal and maximal #Window dimensions (in pixels). This is useful to prevent a window from becoming too small or too big when the user resizes it.",
    category: "Window",
    returnType: "",
  },
  {
    name: "WindowHeight",
    signature: "Result = WindowHeight(#Window [, Mode])",
    documentation: "Returns the height (in pixels) of the given window.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "WindowID",
    signature: "WindowID = WindowID(#Window)",
    documentation: "Returns the unique system identifier of the window.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "WindowWidth",
    signature: "Result = WindowWidth(#Window [, Mode])",
    documentation: "Returns the width (in pixels) of the given window.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "WindowX",
    signature: "Result = WindowX(#Window [, Mode])",
    documentation: "Returns the x position on the screen of the given window.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "WindowY",
    signature: "Result = WindowY(#Window [, Mode])",
    documentation: "Returns the y position on the screen of the given window.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "WindowMouseX",
    signature: "x = WindowMouseX(#Window)",
    documentation:
      "Returns the mouse x position in the inner area of the specified window.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "WindowMouseY",
    signature: "y = WindowMouseY(#Window)",
    documentation:
      "Returns the mouse y position in the inner area of the given window.",
    category: "Window",
    returnType: "i",
  },
  {
    name: "WindowOutput",
    signature: "OutputID = WindowOutput(#Window)",
    documentation:
      "Returns the OutputID of the given window to perform 2D rendering operation on it. It will use the PureBasic 2DDrawing library and can only be used within a StartDrawing() / StopDrawing() block. The memory allocated in WindowOutput() is released on StopDrawing().",
    category: "Window",
    returnType: "i",
  },
  {
    name: "WindowVectorOutput",
    signature: "VectorOutputID = WindowVectorOutput(#Window [, Unit])",
    documentation:
      "Returns the OutputID of the given window to perform vector drawing operations. It will use the PureBasic VectorDrawing library and can only be used within a StartVectorDrawing() / StopVectorDrawing() block. The memory allocated in WindowVectorOutput() is released on",
    category: "Window",
    returnType: "i",
  },
  {
    name: "EventwParam",
    signature: "Result = EventwParam()",
    documentation:
      "This function is not supported anymore and shouldn’t used in new project. Use a callback to get full control over Windows message with SetWindowCallback() .",
    category: "Window",
    returnType: "i",
  },
  {
    name: "EventlParam",
    signature: "Result = EventlParam()",
    documentation:
      "This function is not supported anymore and shouldn’t used in new project. Use a callback to get full control over Windows message with SetWindowCallback() .",
    category: "Window",
    returnType: "i",
  },
  // ── Window3D ───────────────────────────────────────
  {
    name: "CloseWindow3D",
    signature: "CloseWindow3D(#Window3D)",
    documentation: "Close the specified window.",
    category: "Window3D",
    returnType: "",
  },
  {
    name: "DisableWindow3D",
    signature: "DisableWindow3D(#Window3D, State)",
    documentation: "Enables or disables user input to the specified Window.",
    category: "Window3D",
    returnType: "",
  },
  {
    name: "EventGadget3D",
    signature: "Result = EventGadget3D()",
    documentation:
      "After an event of type #PB_Event3D_Gadget (returned by WindowEvent3D() ), use this function to determine which gadget has been triggered.",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "EventType3D",
    signature: "Result = EventType3D()",
    documentation:
      "After a WindowEvent3D() function, use this function to determine of which type the event is.",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "EventWindow3D",
    signature: "Result = EventWindow3D()",
    documentation:
      "After a WindowEvent3D() function, use this function to determine on which window the event has occurred.",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "InputEvent3D",
    signature:
      "InputEvent3D(MouseX, MouseY, LeftMouseButton [, Text$, SpecialKey])",
    documentation:
      "Send an event to the 3D GUI system. It is required to have WindowEvent3D() working.",
    category: "Window3D",
    returnType: "",
  },
  {
    name: "GetActiveWindow3D",
    signature: "Result = GetActiveWindow3D()",
    documentation:
      "Returns the 3D window number which currently has the keyboard focus.",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "GetWindowTitle3D",
    signature: "Result\\$ = GetWindowTitle3D(#Window3D)",
    documentation:
      "Returns the text which is currently displayed in the title bar of the specified 3D window.",
    category: "Window3D",
    returnType: "",
  },
  {
    name: "HideWindow3D",
    signature: "HideWindow3D(#Window3D, State)",
    documentation: "Hides or shows the specified #Window3D.",
    category: "Window3D",
    returnType: "",
  },
  {
    name: "IsWindow3D",
    signature: "Result = IsWindow3D(#Window3D)",
    documentation:
      "Tests if the given 3D window is valid and correctly initialized.",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "OpenWindow3D",
    signature:
      "Result = OpenWindow3D(#Window3D, x, y, InnerWidth, InnerHeight,",
    documentation:
      "Opens a new window on the current screen according to the specified parameters. The new window becomes the active window, it’s not needed to use SetActiveWindow3D() (unless the window is created as invisible). All possible events in a window are handled with WindowEvent3D() .",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "ResizeWindow3D",
    signature: "ResizeWindow3D(#Window3D, x, y, Width, Height)",
    documentation:
      "Move and resize the given window to the given position and size.",
    category: "Window3D",
    returnType: "",
  },
  {
    name: "SetActiveWindow3D",
    signature: "SetActiveWindow3D(#Window3D)",
    documentation:
      "Activate the specified window, which means the focus has been put on this window.",
    category: "Window3D",
    returnType: "",
  },
  {
    name: "SetWindowTitle3D",
    signature: "SetWindowTitle3D(#Window3D, Title$)",
    documentation:
      "Changes the text which is currently displayed in the specified 3D window title bar.",
    category: "Window3D",
    returnType: "",
  },
  {
    name: "WindowEvent3D",
    signature: "Result = WindowEvent3D()",
    documentation:
      "Checks if an event has occurred on any of the opened 3D windows. InputEvent3D() needs to be used to send events to the 3D GUI system to be able to have window events. WindowEvent3D() returns the next event from the event queue and returns zero when there are no",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "WindowHeight3D",
    signature: "Result = WindowHeight3D(#Window3D)",
    documentation: "Returns the height of the given window.",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "WindowID3D",
    signature: "Result = WindowID3D(#Window3D)",
    documentation: "Returns the unique system identifier of the 3D window.",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "WindowWidth3D",
    signature: "Result = WindowWidth3D(#Window3D)",
    documentation: "Return the width of the given window.",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "WindowX3D",
    signature: "Result = WindowX3D(#Window3D)",
    documentation:
      "Returns the left position on the screen of the given window.",
    category: "Window3D",
    returnType: "i",
  },
  {
    name: "WindowY3D",
    signature: "Result = WindowY3D(#Window3D)",
    documentation:
      "Returns the top position on the screen, of the given window.",
    category: "Window3D",
    returnType: "i",
  },
  // ── XML ───────────────────────────────────────
  {
    name: "IsXML",
    signature: "Result = IsXML(#XML)",
    documentation:
      "Tests if the given #XML number is a valid and correctly initialized, XML.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "FreeXML",
    signature: "FreeXML(#XML)",
    documentation: "Frees the XML object and all data it contains.",
    category: "XML",
    returnType: "",
  },
  {
    name: "CreateXML",
    signature: "Result = CreateXML(#XML [, Encoding])",
    documentation:
      "Creates a new empty XML tree identified by the #XML number.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "LoadXML",
    signature: "Result = LoadXML(#XML, Filename$ [, Encoding])",
    documentation: "Loads a XML tree from the specified file.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "CatchXML",
    signature: "Result = CatchXML(#XML, *Address, Size [, Flags [, Encoding]])",
    documentation:
      "Creates a new XML tree from XML data in the given memory area. The markup can be parsed in blocks by multiple calls to this function to allow parsing XML data while it arrives from the network for example.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "ParseXML",
    signature: "Result = ParseXML(#XML, Input$)",
    documentation:
      "Creates a new XML tree from XML data in the string. The XML is expected to be encoded in the string format of the executable (Ascii or Unicode). If another encoding needs to be parsed, the CatchXML() function can be used instead.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "XMLStatus",
    signature: "Result = XMLStatus(#XML)",
    documentation:
      "Returns the status of the last parsing operation done on this XML tree (using LoadXML() or CatchXML() ). This function should be called after every LoadXML() or CatchXML() call to ensure that the parsing succeeded. A string representation of the parsing status (ie a readable",
    category: "XML",
    returnType: "i",
  },
  {
    name: "XMLError",
    signature: "Result\\$ = XMLError(#XML)",
    documentation:
      "In case of an error while parsing XML data this function returns an error-message describing the error. XMLStatus() can be used to detect parsing errors.",
    category: "XML",
    returnType: "",
  },
  {
    name: "XMLErrorLine",
    signature: "Result = XMLErrorLine(#XML)",
    documentation:
      "In case of an error while parsing XML data this function returns the line in the input that caused the error (one based). XMLStatus() can be used to detect parsing errors.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "XMLErrorPosition",
    signature: "Result = XMLErrorPosition(#XML)",
    documentation:
      "In case of an error while parsing XML data this function returns character position within the line returned by XMLErrorLine() at which the error was caused. (The first character of the line is at position 1) XMLStatus() can be used to detect parsing errors.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "SaveXML",
    signature: "Result = SaveXML(#XML, Filename$ [, Flags])",
    documentation: "Saves the #XML tree to the given file.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "ExportXMLSize",
    signature: "Result = ExportXMLSize(#XML [, Flags])",
    documentation:
      "Returns the size in bytes that will be needed to export the given XML tree to a memory buffer . This function should be used to determine the needed buffersize for the ExportXML() command.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "ExportXML",
    signature: "Result = ExportXML(#XML, *Address, Size [, Flags])",
    documentation: "Writes the XML tree as markup to the given memory buffer .",
    category: "XML",
    returnType: "i",
  },
  {
    name: "ComposeXML",
    signature: "Result\\$ = ComposeXML(#XML [, Flags])",
    documentation:
      "Returns the XML tree as markup in a single string. The XML will be returned in the string format of the executable (Ascii or Unicode) independent of the setting returned by GetXMLEncoding() . The ExportXML() function can be used to create markup in a different encoding.",
    category: "XML",
    returnType: "",
  },
  {
    name: "FormatXML",
    signature: "FormatXML(#XML, Flags [, IndentStep])",
    documentation:
      "Cleans up or reformats the XML tree for a better look when exporting /saving . It can be used to have a very compact output for efficient transfer or a more formatted output for better reading. The formatting of the parsed XML document is stored in the ’text’ and ’offset’ fields of each node",
    category: "XML",
    returnType: "",
  },
  {
    name: "GetXMLEncoding",
    signature: "Result = GetXMLEncoding(#XML)",
    documentation:
      "Returns the text encoding used for exporting/saving the given XML tree.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "SetXMLEncoding",
    signature: "SetXMLEncoding(#XML, Encoding)",
    documentation:
      "Changes the text encoding used for exporting/saving the given XML tree.",
    category: "XML",
    returnType: "",
  },
  {
    name: "GetXMLStandalone",
    signature: "Result = GetXMLStandalone(#XML)",
    documentation:
      "Returns the value of the ”standalone” attribute in the XML declaration of the document.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "SetXMLStandalone",
    signature: "SetXMLStandalone(#XML, Standalone)",
    documentation:
      "Changes the ”standalone” attribute of the XML declaration when exporting/saving the document.",
    category: "XML",
    returnType: "",
  },
  {
    name: "RootXMLNode",
    signature: "Result = RootXMLNode(#XML)",
    documentation:
      "Returns the root node of the XML tree. This node is always present. It represents the XML document itself. The text contained in this node represents the whitespace outside of any XML node (there can be no text outside of nodes). The children of this node are the main node and any",
    category: "XML",
    returnType: "i",
  },
  {
    name: "MainXMLNode",
    signature: "Result = MainXMLNode(#XML)",
    documentation:
      "Returns the main XML node of the tree. A valid XML document must have one ”main” or ”document” node which contains all other nodes. Except this node, there can only be comments on the first level below the root node . The type of this node is #PB_Xml_Normal.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "ChildXMLNode",
    signature: "Result = ChildXMLNode(Node [, Index])",
    documentation: "Returns a child node of the given XML node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "ParentXMLNode",
    signature: "Result = ParentXMLNode(Node)",
    documentation:
      "Returns the parent node of the given XML node. Every XML node has a parent, except the root node .",
    category: "XML",
    returnType: "i",
  },
  {
    name: "XMLChildCount",
    signature: "Result = XMLChildCount(Node)",
    documentation:
      "Returns the number of child nodes inside the specified XML node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "NextXMLNode",
    signature: "Result = NextXMLNode(Node)",
    documentation:
      "Returns the next XML node after the given one (inside their parent node).",
    category: "XML",
    returnType: "i",
  },
  {
    name: "PreviousXMLNode",
    signature: "Result = PreviousXMLNode(Node)",
    documentation:
      "Returns the previous XML node from the given one (inside their parent node).",
    category: "XML",
    returnType: "i",
  },
  {
    name: "XMLNodeFromPath",
    signature: "Result = XMLNodeFromPath(ParentNode, Path$)",
    documentation:
      "Returns the XML node inside ParentNode who’s relation to ParentNode is described through ’Path$’. XMLNodePath() can be used to get such a path to a node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "XMLNodeFromID",
    signature: "Result = XMLNodeFromID(#XML, ID$)",
    documentation:
      "In valid XML, if a node has an attribute called ”ID”, the value of this attribute must be unique within the XML document. This function can be used to search for a node in the document based on its ID attribute.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "XMLNodeType",
    signature: "Result = XMLNodeType(Node)",
    documentation: "Returns the type of the given XML node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "GetXMLNodeText",
    signature: "Result\\$ = GetXMLNodeText(Node)",
    documentation: "Returns the text inside the given XML node.",
    category: "XML",
    returnType: "",
  },
  {
    name: "SetXMLNodeText",
    signature: "SetXMLNodeText(Node, Text$)",
    documentation:
      "Changes the text contained within the given XML node. See GetXMLNodeText() for more information.",
    category: "XML",
    returnType: "",
  },
  {
    name: "GetXMLNodeOffset",
    signature: "Result = GetXMLNodeOffset(Node)",
    documentation:
      "Returns the character offset of this node within its parent.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "SetXMLNodeOffset",
    signature: "SetXMLNodeOffset(Node, Offset)",
    documentation:
      "Changes the character offset of the given XML node within its parent nodes text data . See GetXMLNodeOffset() for more information.",
    category: "XML",
    returnType: "",
  },
  {
    name: "GetXMLNodeName",
    signature: "Result\\$ = GetXMLNodeName(Node)",
    documentation: "Returns the tagname of the given XML node.",
    category: "XML",
    returnType: "",
  },
  {
    name: "SetXMLNodeName",
    signature: "SetXMLNodeName(Node, Name$)",
    documentation:
      "Changes the tagname of the given XML node. If the node is not of type #PB_XML_Normal or #PB_XML_Instruction, this function is ignored.",
    category: "XML",
    returnType: "",
  },
  {
    name: "XMLNodePath",
    signature: "Result\\$ = XMLNodePath(Node [, ParentNode])",
    documentation:
      "Returns a string representing the relation between Node and ParentNode.",
    category: "XML",
    returnType: "",
  },
  {
    name: "GetXMLAttribute",
    signature: "Result\\$ = GetXMLAttribute(Node, Attribute$)",
    documentation: "Returns the value of an attribute in the given XML node.",
    category: "XML",
    returnType: "",
  },
  {
    name: "SetXMLAttribute",
    signature: "SetXMLAttribute(Node, Attribute$, Value$)",
    documentation:
      "Sets the value of the attribute on the given XML node. If the attribute does not exist yet, it will be added.",
    category: "XML",
    returnType: "",
  },
  {
    name: "RemoveXMLAttribute",
    signature: "RemoveXMLAttribute(Node, Attribute$)",
    documentation: "Removes the attribute from the given XML node.",
    category: "XML",
    returnType: "",
  },
  {
    name: "ExamineXMLAttributes",
    signature: "Result = ExamineXMLAttributes(Node)",
    documentation: "Starts to examine the attributes of the given XML node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "NextXMLAttribute",
    signature: "Result = NextXMLAttribute(Node)",
    documentation:
      "This function must be called after ExamineXMLAttributes() to move step by step through the attributes of the given XML node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "XMLAttributeName",
    signature: "Result\\$ = XMLAttributeName(Node)",
    documentation:
      "After calling ExamineXMLAttributes() and NextXMLAttribute() this function returns the attribute name of the currently examined attribute on the given XML node.",
    category: "XML",
    returnType: "",
  },
  {
    name: "XMLAttributeValue",
    signature: "Result\\$ = XMLAttributeValue(Node)",
    documentation:
      "After calling ExamineXMLAttributes() and NextXMLAttribute() this function returns the attribute value of the currently examined attribute on the given XML node.",
    category: "XML",
    returnType: "",
  },
  {
    name: "CreateXMLNode",
    signature:
      "Result = CreateXMLNode(ParentNode, Name$ [, PreviousNode [, Type]])",
    documentation:
      "Creates a new XML node and inserts it into the given parent node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "CopyXMLNode",
    signature: "Result = CopyXMLNode(Node, ParentNode [, PreviousNode])",
    documentation:
      "Copies the given XML node and all its contained text and children to a new location. This function can even be used to copy nodes into a different XML tree. For moving a complete node to a new location MoveXMLNode() can be used.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "MoveXMLNode",
    signature: "Result = MoveXMLNode(Node, ParentNode [, PreviousNode])",
    documentation:
      "Moves the given XML node and all its contained text and children to a new location. This function can even be used to move nodes into a different XML tree. For copying a complete node to a new location CopyXMLNode() can be used.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "DeleteXMLNode",
    signature: "DeleteXMLNode(Node)",
    documentation:
      "Deletes the specified XML node and all its contained text and children from its XML tree.",
    category: "XML",
    returnType: "",
  },
  {
    name: "ResolveXMLNodeName",
    signature: "Result\\$ = ResolveXMLNodeName(Node [, Separator$])",
    documentation:
      "Returns the expanded name of the given node in a document that uses XML namespaces. The expanded name consists of the namespace uri (if any) and the local node name, separated by the separator character given in ’Separator$’.",
    category: "XML",
    returnType: "",
  },
  {
    name: "ResolveXMLAttributeName",
    signature:
      "Result\\$ = ResolveXMLAttributeName(Node, Attribute$ [, Separator$])",
    documentation:
      "Returns the expanded name of the given node’s attribute in a document that uses XML namespaces. The expanded name consists of the namespace uri (if any) and the local attribute name, separated by the separator character given in ’Separator$’.",
    category: "XML",
    returnType: "",
  },
  {
    name: "InsertXMLArray",
    signature: "Result = InsertXMLArray(ParentNode, Array() [, PreviousNode])",
    documentation:
      "Insert the specified Array() as a new XML node into the given parent node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "InsertXMLList",
    signature: "Result = InsertXMLList(ParentNode, List() [, PreviousNode])",
    documentation:
      "Insert the specified List() as a new XML node into the given parent node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "InsertXMLMap",
    signature: "Result = InsertXMLMap(ParentNode, Map() [, PreviousNode])",
    documentation:
      "Insert the specified Map() as a new XML node into the given parent node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "InsertXMLStructure",
    signature: "Result = InsertXMLStructure(ParentNode, *Buffer, Structure [,",
    documentation:
      "Insert the specified structure memory as a new XML node into the given parent node.",
    category: "XML",
    returnType: "i",
  },
  {
    name: "ExtractXMLArray",
    signature: "ExtractXMLArray(Node, Array() [, Flags])",
    documentation:
      "Extract elements from the given XML node into the specified Array(). The array will be resized to the number of elements contained in the node.",
    category: "XML",
    returnType: "",
  },
  {
    name: "ExtractXMLList",
    signature: "ExtractXMLList(Node, List() [, Flags])",
    documentation:
      "Extract elements from the given XML node into the specified List(). The list will be cleared before extracting the elements.",
    category: "XML",
    returnType: "",
  },
  {
    name: "ExtractXMLMap",
    signature: "ExtractXMLMap(Node, Map() [, Flags])",
    documentation:
      "Extract elements from the given XML node into the specified Map(). The map will be cleared before extracting the elements.",
    category: "XML",
    returnType: "",
  },
  {
    name: "ExtractXMLStructure",
    signature: "ExtractXMLStructure(Node, *Buffer, Structure [, Flags])",
    documentation:
      "Extract elements from the given XML node into the specified structure memory. The structure will be cleared before extracting XML nodes.",
    category: "XML",
    returnType: "",
  },
];
