\echo `Delete and recreate lamb_project db?`
\echo 'Delete and recrete lamb_project db?'
\prompt 'Return for yes or control-C to cancel>' answer

DROP DATABASE lamb_project;
CREATE DATABASE lamb_project;
\connect lamb_project;

\i lamb_project_schema.sql